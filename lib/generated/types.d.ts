export type Maybe<T> = T | null

export interface VoteWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  user?: Maybe<UserWhereInput>

  post?: Maybe<PostWhereInput>

  type?: Maybe<VoteType>

  type_not?: Maybe<VoteType>

  type_in?: Maybe<VoteType[]>

  type_not_in?: Maybe<VoteType[]>

  AND?: Maybe<VoteWhereInput[]>

  OR?: Maybe<VoteWhereInput[]>

  NOT?: Maybe<VoteWhereInput[]>
}

export interface UserWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  email?: Maybe<string>

  email_not?: Maybe<string>

  email_in?: Maybe<string[]>

  email_not_in?: Maybe<string[]>

  email_lt?: Maybe<string>

  email_lte?: Maybe<string>

  email_gt?: Maybe<string>

  email_gte?: Maybe<string>

  email_contains?: Maybe<string>

  email_not_contains?: Maybe<string>

  email_starts_with?: Maybe<string>

  email_not_starts_with?: Maybe<string>

  email_ends_with?: Maybe<string>

  email_not_ends_with?: Maybe<string>

  emailValidated?: Maybe<boolean>

  emailValidated_not?: Maybe<boolean>

  emailToken?: Maybe<string>

  emailToken_not?: Maybe<string>

  emailToken_in?: Maybe<string[]>

  emailToken_not_in?: Maybe<string[]>

  emailToken_lt?: Maybe<string>

  emailToken_lte?: Maybe<string>

  emailToken_gt?: Maybe<string>

  emailToken_gte?: Maybe<string>

  emailToken_contains?: Maybe<string>

  emailToken_not_contains?: Maybe<string>

  emailToken_starts_with?: Maybe<string>

  emailToken_not_starts_with?: Maybe<string>

  emailToken_ends_with?: Maybe<string>

  emailToken_not_ends_with?: Maybe<string>

  password?: Maybe<string>

  password_not?: Maybe<string>

  password_in?: Maybe<string[]>

  password_not_in?: Maybe<string[]>

  password_lt?: Maybe<string>

  password_lte?: Maybe<string>

  password_gt?: Maybe<string>

  password_gte?: Maybe<string>

  password_contains?: Maybe<string>

  password_not_contains?: Maybe<string>

  password_starts_with?: Maybe<string>

  password_not_starts_with?: Maybe<string>

  password_ends_with?: Maybe<string>

  password_not_ends_with?: Maybe<string>

  resetPasswordToken?: Maybe<string>

  resetPasswordToken_not?: Maybe<string>

  resetPasswordToken_in?: Maybe<string[]>

  resetPasswordToken_not_in?: Maybe<string[]>

  resetPasswordToken_lt?: Maybe<string>

  resetPasswordToken_lte?: Maybe<string>

  resetPasswordToken_gt?: Maybe<string>

  resetPasswordToken_gte?: Maybe<string>

  resetPasswordToken_contains?: Maybe<string>

  resetPasswordToken_not_contains?: Maybe<string>

  resetPasswordToken_starts_with?: Maybe<string>

  resetPasswordToken_not_starts_with?: Maybe<string>

  resetPasswordToken_ends_with?: Maybe<string>

  resetPasswordToken_not_ends_with?: Maybe<string>

  resetPasswordExpire?: Maybe<number>

  resetPasswordExpire_not?: Maybe<number>

  resetPasswordExpire_in?: Maybe<number[]>

  resetPasswordExpire_not_in?: Maybe<number[]>

  resetPasswordExpire_lt?: Maybe<number>

  resetPasswordExpire_lte?: Maybe<number>

  resetPasswordExpire_gt?: Maybe<number>

  resetPasswordExpire_gte?: Maybe<number>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  role?: Maybe<UserRole>

  role_not?: Maybe<UserRole>

  role_in?: Maybe<UserRole[]>

  role_not_in?: Maybe<UserRole[]>

  posts_every?: Maybe<PostWhereInput>

  posts_some?: Maybe<PostWhereInput>

  posts_none?: Maybe<PostWhereInput>

  votes_every?: Maybe<VoteWhereInput>

  votes_some?: Maybe<VoteWhereInput>

  votes_none?: Maybe<VoteWhereInput>

  AND?: Maybe<UserWhereInput[]>

  OR?: Maybe<UserWhereInput[]>

  NOT?: Maybe<UserWhereInput[]>
}

export interface PostWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  isPublished?: Maybe<boolean>

  isPublished_not?: Maybe<boolean>

  slug?: Maybe<string>

  slug_not?: Maybe<string>

  slug_in?: Maybe<string[]>

  slug_not_in?: Maybe<string[]>

  slug_lt?: Maybe<string>

  slug_lte?: Maybe<string>

  slug_gt?: Maybe<string>

  slug_gte?: Maybe<string>

  slug_contains?: Maybe<string>

  slug_not_contains?: Maybe<string>

  slug_starts_with?: Maybe<string>

  slug_not_starts_with?: Maybe<string>

  slug_ends_with?: Maybe<string>

  slug_not_ends_with?: Maybe<string>

  title?: Maybe<string>

  title_not?: Maybe<string>

  title_in?: Maybe<string[]>

  title_not_in?: Maybe<string[]>

  title_lt?: Maybe<string>

  title_lte?: Maybe<string>

  title_gt?: Maybe<string>

  title_gte?: Maybe<string>

  title_contains?: Maybe<string>

  title_not_contains?: Maybe<string>

  title_starts_with?: Maybe<string>

  title_not_starts_with?: Maybe<string>

  title_ends_with?: Maybe<string>

  title_not_ends_with?: Maybe<string>

  text?: Maybe<string>

  text_not?: Maybe<string>

  text_in?: Maybe<string[]>

  text_not_in?: Maybe<string[]>

  text_lt?: Maybe<string>

  text_lte?: Maybe<string>

  text_gt?: Maybe<string>

  text_gte?: Maybe<string>

  text_contains?: Maybe<string>

  text_not_contains?: Maybe<string>

  text_starts_with?: Maybe<string>

  text_not_starts_with?: Maybe<string>

  text_ends_with?: Maybe<string>

  text_not_ends_with?: Maybe<string>

  author?: Maybe<UserWhereInput>

  votes_every?: Maybe<VoteWhereInput>

  votes_some?: Maybe<VoteWhereInput>

  votes_none?: Maybe<VoteWhereInput>

  subCategories_every?: Maybe<SubCategoryWhereInput>

  subCategories_some?: Maybe<SubCategoryWhereInput>

  subCategories_none?: Maybe<SubCategoryWhereInput>

  thumbnail?: Maybe<string>

  thumbnail_not?: Maybe<string>

  thumbnail_in?: Maybe<string[]>

  thumbnail_not_in?: Maybe<string[]>

  thumbnail_lt?: Maybe<string>

  thumbnail_lte?: Maybe<string>

  thumbnail_gt?: Maybe<string>

  thumbnail_gte?: Maybe<string>

  thumbnail_contains?: Maybe<string>

  thumbnail_not_contains?: Maybe<string>

  thumbnail_starts_with?: Maybe<string>

  thumbnail_not_starts_with?: Maybe<string>

  thumbnail_ends_with?: Maybe<string>

  thumbnail_not_ends_with?: Maybe<string>

  AND?: Maybe<PostWhereInput[]>

  OR?: Maybe<PostWhereInput[]>

  NOT?: Maybe<PostWhereInput[]>
}

export interface SubCategoryWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  title?: Maybe<string>

  title_not?: Maybe<string>

  title_in?: Maybe<string[]>

  title_not_in?: Maybe<string[]>

  title_lt?: Maybe<string>

  title_lte?: Maybe<string>

  title_gt?: Maybe<string>

  title_gte?: Maybe<string>

  title_contains?: Maybe<string>

  title_not_contains?: Maybe<string>

  title_starts_with?: Maybe<string>

  title_not_starts_with?: Maybe<string>

  title_ends_with?: Maybe<string>

  title_not_ends_with?: Maybe<string>

  categories_every?: Maybe<CategoryWhereInput>

  categories_some?: Maybe<CategoryWhereInput>

  categories_none?: Maybe<CategoryWhereInput>

  posts_every?: Maybe<PostWhereInput>

  posts_some?: Maybe<PostWhereInput>

  posts_none?: Maybe<PostWhereInput>

  AND?: Maybe<SubCategoryWhereInput[]>

  OR?: Maybe<SubCategoryWhereInput[]>

  NOT?: Maybe<SubCategoryWhereInput[]>
}

export interface CategoryWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  title?: Maybe<string>

  title_not?: Maybe<string>

  title_in?: Maybe<string[]>

  title_not_in?: Maybe<string[]>

  title_lt?: Maybe<string>

  title_lte?: Maybe<string>

  title_gt?: Maybe<string>

  title_gte?: Maybe<string>

  title_contains?: Maybe<string>

  title_not_contains?: Maybe<string>

  title_starts_with?: Maybe<string>

  title_not_starts_with?: Maybe<string>

  title_ends_with?: Maybe<string>

  title_not_ends_with?: Maybe<string>

  subCategories_every?: Maybe<SubCategoryWhereInput>

  subCategories_some?: Maybe<SubCategoryWhereInput>

  subCategories_none?: Maybe<SubCategoryWhereInput>

  AND?: Maybe<CategoryWhereInput[]>

  OR?: Maybe<CategoryWhereInput[]>

  NOT?: Maybe<CategoryWhereInput[]>
}

export enum UserRole {
  Member = 'MEMBER',
  Editor = 'EDITOR',
  Admin = 'ADMIN',
}

export enum VoteType {
  Like = 'LIKE',
  Dislike = 'DISLIKE',
}

export enum VoteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export enum SubCategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  ThumbnailAsc = 'thumbnail_ASC',
  ThumbnailDesc = 'thumbnail_DESC',
}

export type DateTime = any

// ====================================================
// Documents
// ====================================================

export namespace Posts {
  export type Variables = {}

  export type Query = {
    __typename?: 'Query'

    posts: Posts[]
  }

  export type Posts = {
    __typename?: 'Post'

    title: string
  }
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string
      name: string
      possibleTypes: {
        name: string
      }[]
    }[]
  }
}

const result: IntrospectionResultData = {
  __schema: {
    types: [],
  },
}

export default result
