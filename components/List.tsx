import React from 'react'
import ListItem from './ListItem'
import { useQuery } from 'react-apollo-hooks'

import { TopPicks } from '../lib/generated/types'
import query from '../lib/graphql/toppicks.graphql'

const List: React.FunctionComponent = () => {
  const { data, error, loading } = useQuery<TopPicks.Query, TopPicks.Variables>(
    query,
    {
      suspend: false,
      variables: {
        topPostsCount: 1,
      },
    },
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      {data &&
        data.topPicks.map(item => <ListItem data={item} key={item.id} />)}
    </div>
  )
}

export default List
