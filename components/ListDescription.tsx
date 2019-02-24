/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import {
  DESCRIPTION_HEIGHT,
  POST_TITLE_COLOR,
  POST_DESCRIPTION_COLOR,
  FONT_SIZE_4,
  FONT_SIZE_2,
} from '../lib/constants'
import ItemsCenter from './ItemsCenter'

interface Props {
  title: string
  description: string
}

const holder = css({
  height: DESCRIPTION_HEIGHT,
  flexFlow: 'column',
  alignItems: 'flex-start',
  padding: '0 12px',
})

const postTitle = css({
  fontSize: FONT_SIZE_2,
  color: POST_TITLE_COLOR,
})

const postDescription = css({
  fontSize: FONT_SIZE_4,
  color: POST_DESCRIPTION_COLOR,
})

const ListDescription: React.FunctionComponent<Props> = ({
  title,
  description,
}) => {
  return (
    <ItemsCenter style={holder}>
      <h2 css={postTitle}>{title}</h2>
      <p css={postDescription}>{description}</p>
    </ItemsCenter>
  )
}

export default ListDescription
