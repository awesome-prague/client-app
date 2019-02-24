import React from 'react'
import { MockedResponse } from 'react-apollo/test-utils'
import { MockLink } from 'apollo-link-mock'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'
import { cleanup, render, getByText, act } from 'react-testing-library'

import 'jest-dom/extend-expect'

import * as postQuery from '../lib/graphql/posts.graphql'
import Index from '../pages/index'

const mocks: MockedResponse[] = [
  {
    request: {
      query: postQuery,
    },
    result: {
      data: {
        posts: [{ __typename: 'Post', id: 1, title: 'A test post' }],
      },
    },
  },
]

function createClient(mocks: MockedResponse[]) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks),
  })
}

afterEach(cleanup)

it('should render posts', async () => {
  jest.useFakeTimers()

  const client = createClient(mocks)
  const { container } = render(
    <ApolloProvider client={client}>
      <Index />
    </ApolloProvider>,
  )

  expect(container.textContent).toContain('Loading...')

  // This line is required to run queued `useEffect` hooks until these issues
  // are solved:
  // https://github.com/kentcdodds/react-testing-library/pull/216
  // https://github.com/facebook/react/issues/14050
  // render(null as any)
  // await wait(0)
  act(() => {
    jest.advanceTimersByTime(0)
  })

  expect(container.textContent).toContain('Hello Next.js')
  expect(getByText(container, 'A test post')).toBeTruthy()

  const postEl = container.querySelector('.post')
  expect(postEl).toBeInTheDocument()
})
