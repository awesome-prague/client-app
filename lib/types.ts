import { ApolloError } from 'apollo-boost'

export interface Query<T> {
  data?: T
  loading?: boolean
  error?: ApolloError
}
