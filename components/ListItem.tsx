/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'

import { DataObject } from './List'
import ListThumbnail from './ListThumbnail'
import ListDescription from './ListDescription'
import {
  POST_BOX_SHADOW,
  POST_BORDER_RADIUS,
  MAIN_PADDING_1,
} from '../lib/constants'

export interface Props {
  data: DataObject
}

const postHolder = css({
  boxShadow: POST_BOX_SHADOW,
  borderRadius: POST_BORDER_RADIUS,
  margin: MAIN_PADDING_1,
})

const ListItem: React.FunctionComponent<Props> = ({
  data: { title, description },
}) => (
  <div css={postHolder}>
    <ListThumbnail src="../static/img/fixtures/svic.jpg" />
    <ListDescription title={title} description={description} />
  </div>
)

export default ListItem
