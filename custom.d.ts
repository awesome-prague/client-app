declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export default value
}

declare module '*.svg' {
  const content: any
  export default content
}
