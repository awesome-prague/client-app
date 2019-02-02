import React, { useCallback } from 'react'
import Link from 'next/link'
import { useMappedState } from 'redux-react-hook'

import Layout from '../components/Layout'
import { State } from '../lib/redux/store'

const stateMapper = (state: State) => ({
  test: state.test,
})

const about: React.FunctionComponent = () => {
  const mapState = useCallback(stateMapper, [])
  const { test } = useMappedState(mapState)

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <p>This is the about page</p>
      <p>{test}</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default about
