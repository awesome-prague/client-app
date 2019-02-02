import React from 'react'
import { renderToString } from 'react-dom/server'
import initApollo from './init-apollo'
import Head from 'next/head'
import { getMarkupFromTree } from 'react-apollo-hooks'
import { NormalizedCacheObject } from 'apollo-boost'
import NextApp, { NextAppContext, AppProps, DefaultAppIProps } from 'next/app'

const isBrowser = typeof window !== 'undefined'

interface Props {
  apolloState: NormalizedCacheObject
}

export default (App: typeof NextApp) => {
  return class Apollo extends React.Component<
    Props & AppProps & DefaultAppIProps
  > {
    static displayName = 'withApollo(App)'
    static async getInitialProps(ctx: NextAppContext) {
      const { Component, router } = ctx

      let appProps = {
        pageProps: {},
      }
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo({})
      if (!isBrowser) {
        try {
          // Run all GraphQL queries
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                apolloClient={apollo}
              />
            ),
          })
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    apolloClient = initApollo(this.props.apolloState)

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
