import React from 'react'
import Head from 'next/head'
import { Global } from '@emotion/core'

import reset from '../static/css/reset'
import fontFace from '../static/css/font-face'
import global from '../static/css/global'

import Header from './Header'
import SearchBar from './SearchBar'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Awesome Prague',
}) => (
  <div>
    <Global styles={[reset, fontFace, global]} />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header title={title} />
    <SearchBar />
    {children}
  </div>
)

export default Layout
