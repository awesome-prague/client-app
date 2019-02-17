/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

import ItemsCenter from './ItemsCenter'
import Logo from '../static/img/logo.svg'
import { HEADER_HEIGHT, HEADER_BORDER, LOGO_HEIGHT } from '../lib/constants'

const header = css({
  height: HEADER_HEIGHT,
  borderBottom: `1px solid rgba(${HEADER_BORDER}, 0.1)`,
})

const headlineWrapper = css({
  marginLeft: '-12px',
})

type Props = {
  title: string
}

const Header: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <ItemsCenter style={header}>
      <ItemsCenter style={headlineWrapper}>
        <Logo height={LOGO_HEIGHT} />
        <h1>{title}</h1>
      </ItemsCenter>
    </ItemsCenter>
  )
}

export default Header
