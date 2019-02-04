import * as React from 'react'
import Head from 'next/head'
import Header from './Header'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <style jsx global>{`
      @font-face {
        font-family: opensans;
        src: url('../static/OpenSans-Regular.ttf');
      }
      html,
      body {
        margin: 0;
        font-family: opensans;
      }
    `}</style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
