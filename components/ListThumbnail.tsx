/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import {
  POST_THUMBNAIL_HEIGHT,
  POST_THUMBNAIL_BORDER_RADIUS,
} from '../lib/constants'
import { POST_THUMBNAIL } from '../lib/utils'

interface Props {
  src: string
}

const ListThumbnail: React.FunctionComponent<Props> = ({ src }) => {
  return (
    <div
      css={css({
        height: POST_THUMBNAIL_HEIGHT,
        background: POST_THUMBNAIL(src),
        backgroundSize: 'cover',
        borderRadius: POST_THUMBNAIL_BORDER_RADIUS,
      })}
    />
  )
}

export default ListThumbnail
