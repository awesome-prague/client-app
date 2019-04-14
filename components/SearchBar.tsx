/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'

import { SubCategories, Search } from '../lib/generated/types'
import { Query } from '../lib/types'

// NOTE: TS magic https://github.com/apollographql/graphql-tag/issues/59#issuecomment-316991007
import subCategoriesQuery from '../lib/graphql/subcategories.graphql'
import searchQuery from '../lib/graphql/search.graphql'

import ItemsCenter from './ItemsCenter'
import SearchInput from './SearchInput'

import {
  SEARCH_BAR_HEIGHT,
  MAIN_PADDING_2,
  MAIN_PADDING_3,
  MAIN_THEME_COLOR,
  SECONDARY_THEME_COLOR,
} from '../lib/constants'
import ShowMapButton from './ShowMapButton'

const style = css({
  height: SEARCH_BAR_HEIGHT,
  padding: MAIN_PADDING_2,
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
})

const SearchBar: React.FunctionComponent = () => {
  const [searchedValue, setSearchedValue] = useState('')

  const handleSearchInput = (value: string) => {
    setSearchedValue(value)
  }

  return (
    <div>
      <ItemsCenter style={style}>
        <SearchInput onChange={handleSearchInput} value={searchedValue} />
        <ShowMapButton />
      </ItemsCenter>
      <SearchResults value={searchedValue} />
    </div>
  )
}

type Props = {
  value: string
}
const SearchResults: React.FunctionComponent<Props> = ({ value }) => {
  const style = css({
    backgroundColor: `rgb(${SECONDARY_THEME_COLOR})`,
    paddingTop: MAIN_PADDING_2,
  })

  const searchCategoryStyle = css({
    backgroundColor: `rgba(${MAIN_THEME_COLOR}, 0.2)`,
    padding: MAIN_PADDING_3,
  })

  return (
    <div css={style}>
      {value ? <SearchSuggestions value={value} /> : <SearchNavigation />}
    </div>
  )
}

const SearchNavigation: React.FunctionComponent = () => {
  const { data, loading, error }: Query<SubCategories.Query> = useQuery(
    subCategoriesQuery,
    { suspend: false },
  )
  if (error) return <div>Error! ${error.message}`</div>
  if (loading) return <div>Loading...</div>

  return (
    <div>
      {data &&
        data.subCategories.map(item => {
          return <div key={item.id}>{item.title}</div>
        })}
    </div>
  )
}

const SearchSuggestions: React.FunctionComponent<{ value: string }> = ({
  value,
}) => {
  const { data, loading, error }: Query<Search.Query> = useQuery(searchQuery, {
    suspend: false,
    variables: { value },
  })
  if (error) return <div>Error! ${error.message}`</div>
  if (loading) return <div>Loading...</div>
  if (!data) return <div>No data</div>

  return (
    <div>
      {data.search &&
        [
          ...data.search.posts,
          ...data.search.subCategories,
          ...data.search.categories,
        ].map((item: any) => {
          return <div key={item.id}>{item.title}</div>
        })}
    </div>
  )
}

export default SearchBar
