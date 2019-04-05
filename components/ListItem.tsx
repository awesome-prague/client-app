/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

import ListThumbnail from './ListThumbnail'
import ListDescription from './ListDescription'
import {
  POST_BOX_SHADOW,
  POST_BORDER_RADIUS,
  MAIN_PADDING_1,
} from '../lib/constants'
import { TopPicks } from '../lib/generated/types'

export interface Props {
  data: TopPicks.TopPicks
}

const postHolder = css({
  boxShadow: POST_BOX_SHADOW,
  borderRadius: POST_BORDER_RADIUS,
  margin: MAIN_PADDING_1,
})

const ListItem: React.FunctionComponent<Props> = ({
  data: { title, text, thumbnail },
}) => (
  <div css={postHolder}>
    <ListThumbnail src={thumbnail!} />
    <ListDescription title={title} description={text} />
  </div>
)

export default ListItem
