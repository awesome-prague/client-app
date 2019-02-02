import React from 'react'
import NextApp, { AppProps, DefaultAppIProps } from 'next/app'

import { makeStore } from './store'

export default (App: typeof NextApp) => {
  return class AppWithRedux extends React.Component<
    AppProps & DefaultAppIProps
  > {
    store = makeStore()

    render() {
      return <App {...this.props} reduxStore={this.store} />
    }
  }
}
