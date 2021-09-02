// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: "AdminUser";
  id: Scalars["ID"];
  username: Maybe<Scalars["String"]>;
  firstname: Scalars["String"];
  lastname: Scalars["String"];
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  name: Scalars["String"];
  published_at: Maybe<Scalars["DateTime"]>;
  reviews: Maybe<Array<Maybe<Review>>>;
};

export type CategoryReviewsArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type CategoryAggregator = {
  __typename?: "CategoryAggregator";
  count: Maybe<Scalars["Int"]>;
  totalCount: Maybe<Scalars["Int"]>;
};

export type CategoryConnection = {
  __typename?: "CategoryConnection";
  values: Maybe<Array<Maybe<Category>>>;
  groupBy: Maybe<CategoryGroupBy>;
  aggregate: Maybe<CategoryAggregator>;
};

export type CategoryConnectionCreated_At = {
  __typename?: "CategoryConnectionCreated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionId = {
  __typename?: "CategoryConnectionId";
  key: Maybe<Scalars["ID"]>;
  connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
  __typename?: "CategoryConnectionName";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionPublished_At = {
  __typename?: "CategoryConnectionPublished_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: "CategoryConnectionUpdated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<CategoryConnection>;
};

export type CategoryGroupBy = {
  __typename?: "CategoryGroupBy";
  id: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
  name: Maybe<Array<Maybe<CategoryConnectionName>>>;
  published_at: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>;
};

export type CategoryInput = {
  name: Scalars["String"];
  reviews: Maybe<Array<Maybe<Scalars["ID"]>>>;
  published_at: Maybe<Scalars["DateTime"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type FileInfoInput = {
  name: Maybe<Scalars["String"]>;
  alternativeText: Maybe<Scalars["String"]>;
  caption: Maybe<Scalars["String"]>;
};

export type FileInput = {
  name: Scalars["String"];
  alternativeText: Maybe<Scalars["String"]>;
  caption: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  formats: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata: Maybe<Scalars["JSON"]>;
  related: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  name: Maybe<Scalars["String"]>;
  code: Maybe<Scalars["String"]>;
};

export type InputId = {
  id: Scalars["ID"];
};

export type LocaleInput = {
  name: Maybe<Scalars["String"]>;
  code: Maybe<Scalars["String"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Category
  | CategoryConnection
  | CategoryAggregator
  | CategoryGroupBy
  | CategoryConnectionId
  | CategoryConnectionCreated_At
  | CategoryConnectionUpdated_At
  | CategoryConnectionName
  | CategoryConnectionPublished_At
  | CreateCategoryPayload
  | UpdateCategoryPayload
  | DeleteCategoryPayload
  | Review
  | ReviewConnection
  | ReviewAggregator
  | ReviewAggregatorSum
  | ReviewAggregatorAvg
  | ReviewAggregatorMin
  | ReviewAggregatorMax
  | ReviewGroupBy
  | ReviewConnectionId
  | ReviewConnectionCreated_At
  | ReviewConnectionUpdated_At
  | ReviewConnectionTitle
  | ReviewConnectionBody
  | ReviewConnectionRating
  | ReviewConnectionPublished_At
  | CreateReviewPayload
  | UpdateReviewPayload
  | DeleteReviewPayload
  | I18NLocale
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload;

export type Mutation = {
  __typename?: "Mutation";
  createCategory: Maybe<CreateCategoryPayload>;
  updateCategory: Maybe<UpdateCategoryPayload>;
  deleteCategory: Maybe<DeleteCategoryPayload>;
  createReview: Maybe<CreateReviewPayload>;
  updateReview: Maybe<UpdateReviewPayload>;
  deleteReview: Maybe<DeleteReviewPayload>;
  /** Delete one file */
  deleteFile: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword: Maybe<UserPermissionsPasswordPayload>;
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateCategoryArgs = {
  input: Maybe<CreateCategoryInput>;
};

export type MutationUpdateCategoryArgs = {
  input: Maybe<UpdateCategoryInput>;
};

export type MutationDeleteCategoryArgs = {
  input: Maybe<DeleteCategoryInput>;
};

export type MutationCreateReviewArgs = {
  input: Maybe<CreateReviewInput>;
};

export type MutationUpdateReviewArgs = {
  input: Maybe<UpdateReviewInput>;
};

export type MutationDeleteReviewArgs = {
  input: Maybe<DeleteReviewInput>;
};

export type MutationDeleteFileArgs = {
  input: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
  input: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
  input: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
  input: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
  input: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
  input: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
  input: Maybe<DeleteUserInput>;
};

export type MutationUploadArgs = {
  refId: Maybe<Scalars["ID"]>;
  ref: Maybe<Scalars["String"]>;
  field: Maybe<Scalars["String"]>;
  source: Maybe<Scalars["String"]>;
  info: Maybe<FileInfoInput>;
  file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
  refId: Maybe<Scalars["ID"]>;
  ref: Maybe<Scalars["String"]>;
  field: Maybe<Scalars["String"]>;
  source: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info: FileInfoInput;
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  code: Scalars["String"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  category: Maybe<Category>;
  categories: Maybe<Array<Maybe<Category>>>;
  categoriesConnection: Maybe<CategoryConnection>;
  review: Maybe<Review>;
  reviews: Maybe<Array<Maybe<Review>>>;
  reviewsConnection: Maybe<ReviewConnection>;
  files: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection: Maybe<UploadFileConnection>;
  role: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection: Maybe<UsersPermissionsRoleConnection>;
  user: Maybe<UsersPermissionsUser>;
  users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection: Maybe<UsersPermissionsUserConnection>;
  me: Maybe<UsersPermissionsMe>;
};

export type QueryCategoryArgs = {
  id: Scalars["ID"];
  publicationState: Maybe<PublicationState>;
};

export type QueryCategoriesArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
  publicationState: Maybe<PublicationState>;
};

export type QueryCategoriesConnectionArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type QueryReviewArgs = {
  id: Scalars["ID"];
  publicationState: Maybe<PublicationState>;
};

export type QueryReviewsArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
  publicationState: Maybe<PublicationState>;
};

export type QueryReviewsConnectionArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
  publicationState: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
  publicationState: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
  publicationState: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  publicationState: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
  publicationState: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type Review = {
  __typename?: "Review";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  title: Scalars["String"];
  body: Scalars["String"];
  rating: Scalars["Int"];
  published_at: Maybe<Scalars["DateTime"]>;
  categories: Maybe<Array<Maybe<Category>>>;
};

export type ReviewCategoriesArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type ReviewAggregator = {
  __typename?: "ReviewAggregator";
  count: Maybe<Scalars["Int"]>;
  totalCount: Maybe<Scalars["Int"]>;
  sum: Maybe<ReviewAggregatorSum>;
  avg: Maybe<ReviewAggregatorAvg>;
  min: Maybe<ReviewAggregatorMin>;
  max: Maybe<ReviewAggregatorMax>;
};

export type ReviewAggregatorAvg = {
  __typename?: "ReviewAggregatorAvg";
  rating: Maybe<Scalars["Float"]>;
};

export type ReviewAggregatorMax = {
  __typename?: "ReviewAggregatorMax";
  rating: Maybe<Scalars["Float"]>;
};

export type ReviewAggregatorMin = {
  __typename?: "ReviewAggregatorMin";
  rating: Maybe<Scalars["Float"]>;
};

export type ReviewAggregatorSum = {
  __typename?: "ReviewAggregatorSum";
  rating: Maybe<Scalars["Float"]>;
};

export type ReviewConnection = {
  __typename?: "ReviewConnection";
  values: Maybe<Array<Maybe<Review>>>;
  groupBy: Maybe<ReviewGroupBy>;
  aggregate: Maybe<ReviewAggregator>;
};

export type ReviewConnectionBody = {
  __typename?: "ReviewConnectionBody";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewConnectionCreated_At = {
  __typename?: "ReviewConnectionCreated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewConnectionId = {
  __typename?: "ReviewConnectionId";
  key: Maybe<Scalars["ID"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewConnectionPublished_At = {
  __typename?: "ReviewConnectionPublished_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewConnectionRating = {
  __typename?: "ReviewConnectionRating";
  key: Maybe<Scalars["Int"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewConnectionTitle = {
  __typename?: "ReviewConnectionTitle";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewConnectionUpdated_At = {
  __typename?: "ReviewConnectionUpdated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<ReviewConnection>;
};

export type ReviewGroupBy = {
  __typename?: "ReviewGroupBy";
  id: Maybe<Array<Maybe<ReviewConnectionId>>>;
  created_at: Maybe<Array<Maybe<ReviewConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<ReviewConnectionUpdated_At>>>;
  title: Maybe<Array<Maybe<ReviewConnectionTitle>>>;
  body: Maybe<Array<Maybe<ReviewConnectionBody>>>;
  rating: Maybe<Array<Maybe<ReviewConnectionRating>>>;
  published_at: Maybe<Array<Maybe<ReviewConnectionPublished_At>>>;
};

export type ReviewInput = {
  title: Scalars["String"];
  body: Scalars["String"];
  categories: Maybe<Array<Maybe<Scalars["ID"]>>>;
  rating: Maybe<Scalars["Int"]>;
  published_at: Maybe<Scalars["DateTime"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type RoleInput = {
  name: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  type: Maybe<Scalars["String"]>;
  permissions: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  name: Scalars["String"];
  alternativeText: Maybe<Scalars["String"]>;
  caption: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  formats: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata: Maybe<Scalars["JSON"]>;
  related: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
  __typename?: "UploadFileAggregator";
  count: Maybe<Scalars["Int"]>;
  totalCount: Maybe<Scalars["Int"]>;
  sum: Maybe<UploadFileAggregatorSum>;
  avg: Maybe<UploadFileAggregatorAvg>;
  min: Maybe<UploadFileAggregatorMin>;
  max: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: "UploadFileAggregatorAvg";
  width: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Float"]>;
  size: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  __typename?: "UploadFileAggregatorMax";
  width: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Float"]>;
  size: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  __typename?: "UploadFileAggregatorMin";
  width: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Float"]>;
  size: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
  __typename?: "UploadFileAggregatorSum";
  width: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Float"]>;
  size: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
  __typename?: "UploadFileConnection";
  values: Maybe<Array<Maybe<UploadFile>>>;
  groupBy: Maybe<UploadFileGroupBy>;
  aggregate: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: "UploadFileConnectionAlternativeText";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: "UploadFileConnectionCaption";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: "UploadFileConnectionCreated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: "UploadFileConnectionExt";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: "UploadFileConnectionFormats";
  key: Maybe<Scalars["JSON"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: "UploadFileConnectionHash";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: "UploadFileConnectionHeight";
  key: Maybe<Scalars["Int"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: "UploadFileConnectionId";
  key: Maybe<Scalars["ID"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: "UploadFileConnectionMime";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: "UploadFileConnectionName";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: "UploadFileConnectionPreviewUrl";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: "UploadFileConnectionProvider";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: "UploadFileConnectionProvider_metadata";
  key: Maybe<Scalars["JSON"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: "UploadFileConnectionSize";
  key: Maybe<Scalars["Float"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: "UploadFileConnectionUpdated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: "UploadFileConnectionUrl";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: "UploadFileConnectionWidth";
  key: Maybe<Scalars["Int"]>;
  connection: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: "UploadFileGroupBy";
  id: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  provider: Maybe<Scalars["String"]>;
  password: Maybe<Scalars["String"]>;
  resetPasswordToken: Maybe<Scalars["String"]>;
  confirmationToken: Maybe<Scalars["String"]>;
  confirmed: Maybe<Scalars["Boolean"]>;
  blocked: Maybe<Scalars["Boolean"]>;
  role: Maybe<Scalars["ID"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: "UserPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"];
  username: Scalars["String"];
  email: Scalars["String"];
  confirmed: Maybe<Scalars["Boolean"]>;
  blocked: Maybe<Scalars["Boolean"]>;
  role: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  type: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  id: Scalars["ID"];
  type: Scalars["String"];
  controller: Scalars["String"];
  action: Scalars["String"];
  enabled: Scalars["Boolean"];
  policy: Maybe<Scalars["String"]>;
  role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  type: Maybe<Scalars["String"]>;
  permissions: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  sort: Maybe<Scalars["String"]>;
  limit: Maybe<Scalars["Int"]>;
  start: Maybe<Scalars["Int"]>;
  where: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: "UsersPermissionsRoleAggregator";
  count: Maybe<Scalars["Int"]>;
  totalCount: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: "UsersPermissionsRoleConnection";
  values: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: "UsersPermissionsRoleConnectionDescription";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: "UsersPermissionsRoleConnectionId";
  key: Maybe<Scalars["ID"]>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: "UsersPermissionsRoleConnectionName";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: "UsersPermissionsRoleConnectionType";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: "UsersPermissionsRoleGroupBy";
  id: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  id: Scalars["ID"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  username: Scalars["String"];
  email: Scalars["String"];
  provider: Maybe<Scalars["String"]>;
  confirmed: Maybe<Scalars["Boolean"]>;
  blocked: Maybe<Scalars["Boolean"]>;
  role: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: "UsersPermissionsUserAggregator";
  count: Maybe<Scalars["Int"]>;
  totalCount: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnection = {
  __typename?: "UsersPermissionsUserConnection";
  values: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy: Maybe<UsersPermissionsUserGroupBy>;
  aggregate: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: "UsersPermissionsUserConnectionBlocked";
  key: Maybe<Scalars["Boolean"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: "UsersPermissionsUserConnectionConfirmed";
  key: Maybe<Scalars["Boolean"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: "UsersPermissionsUserConnectionCreated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: "UsersPermissionsUserConnectionEmail";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: "UsersPermissionsUserConnectionId";
  key: Maybe<Scalars["ID"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: "UsersPermissionsUserConnectionProvider";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: "UsersPermissionsUserConnectionRole";
  key: Maybe<Scalars["ID"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: "UsersPermissionsUserConnectionUpdated_at";
  key: Maybe<Scalars["DateTime"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: "UsersPermissionsUserConnectionUsername";
  key: Maybe<Scalars["String"]>;
  connection: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: "UsersPermissionsUserGroupBy";
  id: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateCategoryInput = {
  data: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: "createCategoryPayload";
  category: Maybe<Category>;
};

export type CreateReviewInput = {
  data: Maybe<ReviewInput>;
};

export type CreateReviewPayload = {
  __typename?: "createReviewPayload";
  review: Maybe<Review>;
};

export type CreateRoleInput = {
  data: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: "createRolePayload";
  role: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: "createUserPayload";
  user: Maybe<UsersPermissionsUser>;
};

export type DeleteCategoryInput = {
  where: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: "deleteCategoryPayload";
  category: Maybe<Category>;
};

export type DeleteFileInput = {
  where: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: "deleteFilePayload";
  file: Maybe<UploadFile>;
};

export type DeleteReviewInput = {
  where: Maybe<InputId>;
};

export type DeleteReviewPayload = {
  __typename?: "deleteReviewPayload";
  review: Maybe<Review>;
};

export type DeleteRoleInput = {
  where: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: "deleteRolePayload";
  role: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: "deleteUserPayload";
  user: Maybe<UsersPermissionsUser>;
};

export type EditCategoryInput = {
  name: Maybe<Scalars["String"]>;
  reviews: Maybe<Array<Maybe<Scalars["ID"]>>>;
  published_at: Maybe<Scalars["DateTime"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type EditFileInput = {
  name: Maybe<Scalars["String"]>;
  alternativeText: Maybe<Scalars["String"]>;
  caption: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  formats: Maybe<Scalars["JSON"]>;
  hash: Maybe<Scalars["String"]>;
  ext: Maybe<Scalars["String"]>;
  mime: Maybe<Scalars["String"]>;
  size: Maybe<Scalars["Float"]>;
  url: Maybe<Scalars["String"]>;
  previewUrl: Maybe<Scalars["String"]>;
  provider: Maybe<Scalars["String"]>;
  provider_metadata: Maybe<Scalars["JSON"]>;
  related: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
  name: Maybe<Scalars["String"]>;
  code: Maybe<Scalars["String"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type EditReviewInput = {
  title: Maybe<Scalars["String"]>;
  body: Maybe<Scalars["String"]>;
  categories: Maybe<Array<Maybe<Scalars["ID"]>>>;
  rating: Maybe<Scalars["Int"]>;
  published_at: Maybe<Scalars["DateTime"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  name: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  type: Maybe<Scalars["String"]>;
  permissions: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type EditUserInput = {
  username: Maybe<Scalars["String"]>;
  email: Maybe<Scalars["String"]>;
  provider: Maybe<Scalars["String"]>;
  password: Maybe<Scalars["String"]>;
  resetPasswordToken: Maybe<Scalars["String"]>;
  confirmationToken: Maybe<Scalars["String"]>;
  confirmed: Maybe<Scalars["Boolean"]>;
  blocked: Maybe<Scalars["Boolean"]>;
  role: Maybe<Scalars["ID"]>;
  created_by: Maybe<Scalars["ID"]>;
  updated_by: Maybe<Scalars["ID"]>;
};

export type UpdateCategoryInput = {
  where: Maybe<InputId>;
  data: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: "updateCategoryPayload";
  category: Maybe<Category>;
};

export type UpdateReviewInput = {
  where: Maybe<InputId>;
  data: Maybe<EditReviewInput>;
};

export type UpdateReviewPayload = {
  __typename?: "updateReviewPayload";
  review: Maybe<Review>;
};

export type UpdateRoleInput = {
  where: Maybe<InputId>;
  data: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: "updateRolePayload";
  role: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where: Maybe<InputId>;
  data: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: "updateUserPayload";
  user: Maybe<UsersPermissionsUser>;
};

export type GetReviewsQueryVariables = Exact<{ [key: string]: never }>;

export type GetReviewsQuery = {
  __typename?: "Query";
  reviews: Maybe<
    Array<
      Maybe<{
        __typename?: "Review";
        id: string;
        title: string;
        body: string;
        rating: number;
        categories: Maybe<Array<Maybe<{ __typename?: "Category"; id: string; name: string }>>>;
      }>
    >
  >;
};

export type GetReviewQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetReviewQuery = {
  __typename?: "Query";
  review: Maybe<{
    __typename?: "Review";
    id: string;
    title: string;
    body: string;
    rating: number;
    categories: Maybe<Array<Maybe<{ __typename?: "Category"; id: string; name: string }>>>;
  }>;
};

export type GetCategoryQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetCategoryQuery = {
  __typename?: "Query";
  category: Maybe<{
    __typename?: "Category";
    id: string;
    name: string;
    reviews: Maybe<
      Array<
        Maybe<{
          __typename?: "Review";
          id: string;
          title: string;
          body: string;
          rating: number;
          categories: Maybe<Array<Maybe<{ __typename?: "Category"; id: string; name: string }>>>;
        }>
      >
    >;
  }>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesQuery = { __typename?: "Query"; categories: Maybe<Array<Maybe<{ __typename?: "Category"; id: string; name: string }>>> };

export const GetReviewsDocument = gql`
  query GetReviews {
    reviews {
      id
      title
      body
      rating
      categories {
        id
        name
      }
    }
  }
`;

/**
 * __useGetReviewsQuery__
 *
 * To run a query within a React component, call `useGetReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReviewsQuery(baseOptions?: Apollo.QueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
}
export function useGetReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
}
export type GetReviewsQueryHookResult = ReturnType<typeof useGetReviewsQuery>;
export type GetReviewsLazyQueryHookResult = ReturnType<typeof useGetReviewsLazyQuery>;
export type GetReviewsQueryResult = Apollo.QueryResult<GetReviewsQuery, GetReviewsQueryVariables>;
export const GetReviewDocument = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      id
      title
      body
      rating
      categories {
        id
        name
      }
    }
  }
`;

/**
 * __useGetReviewQuery__
 *
 * To run a query within a React component, call `useGetReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReviewQuery(baseOptions: Apollo.QueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
}
export function useGetReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
}
export type GetReviewQueryHookResult = ReturnType<typeof useGetReviewQuery>;
export type GetReviewLazyQueryHookResult = ReturnType<typeof useGetReviewLazyQuery>;
export type GetReviewQueryResult = Apollo.QueryResult<GetReviewQuery, GetReviewQueryVariables>;
export const GetCategoryDocument = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      id
      name
      reviews {
        id
        title
        body
        rating
        categories {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
}
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
}
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetCategoriesDocument = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
}
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
}
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
