/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import React from 'react'

export const itemsCenterStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  width: '100%',
})

type Props = {
  style?: SerializedStyles
}

const ItemsCenter: React.FunctionComponent<Props> = ({ children, style }) => {
  return <div css={[itemsCenterStyle, style]}>{children}</div>
}

export default ItemsCenter
