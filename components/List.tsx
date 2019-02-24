import * as React from 'react'
import ListItem from './ListItem'

export interface DataObject {
  id: number
  title: string
  description: string
}

const List: React.FunctionComponent = () => {
  const dataArray: DataObject[] = [
    {
      id: 101,
      title: 'Dish burger bistro',
      description: 'A really nice bistro, amazing burgers and beer…',
    },
    {
      id: 102,
      title: 'Dish burger bistro',
      description: 'A really nice bistro, amazing burgers and beer…',
    },
    {
      id: 103,
      title: 'Dish burger bistro',
      description: 'A really nice bistro, amazing burgers and beer…',
    },
  ]
  return (
    <div>
      {dataArray.map(item => (
        <ListItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
