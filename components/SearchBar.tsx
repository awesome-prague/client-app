/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

import ItemsCenter from './ItemsCenter'
import SearchInput from './SearchInput'

import { SEARCH_BAR_HEIGHT, MAIN_PADDING_2 } from '../lib/constants'
import ShowMapButton from './ShowMapButton'

const style = css({
  height: SEARCH_BAR_HEIGHT,
  padding: `${MAIN_PADDING_2}`,
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
})

const SearchBar: React.FunctionComponent = () => {
  return (
    <ItemsCenter style={style}>
      <SearchInput />
      <ShowMapButton />
    </ItemsCenter>
  )
}

export default SearchBar
