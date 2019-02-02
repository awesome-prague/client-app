import App, { Container, AppComponentType } from 'next/app'
import React from 'react'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import { StoreContext } from 'redux-react-hook'

import withApolloClient from '../lib/with-apollo-client'
import withRedux from '../lib/redux/with-redux'
import { Store } from 'redux'
import { State, Action } from '../lib/redux/store'

type Props = {
  apolloClient: ApolloClient<NormalizedCacheObject>
  reduxStore: Store<State, Action>
} & AppComponentType

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apolloClient, reduxStore } = this.props
    return (
      <Container>
        <ApolloHooksProvider client={apolloClient}>
          <StoreContext.Provider value={reduxStore}>
            <Component {...pageProps} />
          </StoreContext.Provider>
        </ApolloHooksProvider>
      </Container>
    )
  }
}

export default withRedux(withApolloClient(MyApp))
