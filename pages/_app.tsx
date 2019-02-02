import App, { Container, AppComponentType } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'

type Props = {
  apolloClient: ApolloClient<NormalizedCacheObject>
} & AppComponentType

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloHooksProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloHooksProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
