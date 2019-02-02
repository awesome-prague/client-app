import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useQuery } from 'react-apollo-hooks'
import { Posts } from '../lib/generated/types'
import { Query } from '../lib/types'

// NOTE: TS magic https://github.com/apollographql/graphql-tag/issues/59#issuecomment-316991007
import * as postQuery from '../lib/graphql/posts.graphql'

const index: React.FunctionComponent = () => {
  const { data, loading, error }: Query<Posts.Query> = useQuery(postQuery, {
    suspend: false,
  })
  if (error) return <div>Error! ${error.message}`</div>
  if (loading) return <div>Loading...</div>

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      {data &&
        data.posts.map(post => (
          <div className="post" key={post.title}>
            {post.title}
          </div>
        ))}
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default index
