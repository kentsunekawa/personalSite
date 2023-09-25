import type { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Account = {
  readonly __typename?: 'Account';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type EducationalFacility = {
  readonly __typename?: 'EducationalFacility';
  readonly department: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly period: Period;
};

export const EmploymentType = {
  Fulltime: 'FULLTIME'
} as const;

export type EmploymentType = typeof EmploymentType[keyof typeof EmploymentType];
export type Organization = {
  readonly __typename?: 'Organization';
  readonly employmentType: EmploymentType;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly period: Period;
  readonly position?: Maybe<Scalars['String']['output']>;
};

export type Period = {
  readonly __typename?: 'Period';
  readonly end?: Maybe<Scalars['String']['output']>;
  readonly start: Scalars['String']['output'];
};

export type Post = {
  readonly __typename?: 'Post';
  readonly date: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly labels: ReadonlyArray<PostLabel>;
  readonly slug: Scalars['String']['output'];
  readonly status: PostStatus;
  readonly title: Scalars['String']['output'];
};

export const PostLabel = {
  HighPriority: 'HIGH_PRIORITY'
} as const;

export type PostLabel = typeof PostLabel[keyof typeof PostLabel];
export const PostStatus = {
  Published: 'PUBLISHED'
} as const;

export type PostStatus = typeof PostStatus[keyof typeof PostStatus];
export const Proficiency = {
  Experienced: 'EXPERIENCED',
  HaveUsed: 'HAVE_USED'
} as const;

export type Proficiency = typeof Proficiency[keyof typeof Proficiency];
export type Profile = {
  readonly __typename?: 'Profile';
  readonly accounts: ReadonlyArray<Account>;
  readonly birthDate: Scalars['String']['output'];
  readonly businessTitle: Scalars['String']['output'];
  readonly educationalBackgrounds: ReadonlyArray<EducationalFacility>;
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly projects: ReadonlyArray<Project>;
  readonly skills: ReadonlyArray<Skill>;
  readonly speciality: Scalars['String']['output'];
  readonly workHistories: ReadonlyArray<Organization>;
};

export type Project = {
  readonly __typename?: 'Project';
  readonly belonging?: Maybe<Organization>;
  readonly id: Scalars['ID']['output'];
  readonly period: Period;
  readonly position?: Maybe<Scalars['String']['output']>;
  readonly responsibility?: Maybe<Scalars['String']['output']>;
  readonly team?: Maybe<Scalars['String']['output']>;
  readonly technologies: ReadonlyArray<Skill>;
  readonly title: Scalars['String']['output'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly posts: ReadonlyArray<Post>;
  readonly profile: Profile;
};

export type Skill = {
  readonly __typename?: 'Skill';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly proficiency: Proficiency;
};

export type AccountFragment = { readonly __typename?: 'Account', readonly id: string, readonly name: string, readonly url: string };

export type EducationalFacilityFragment = { readonly __typename?: 'EducationalFacility', readonly id: string, readonly name: string, readonly department: string, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } };

export type OrganizationFragment = { readonly __typename?: 'Organization', readonly id: string, readonly name: string, readonly employmentType: EmploymentType, readonly position?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } };

export type PeriodFragment = { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null };

export type PostFragment = { readonly __typename?: 'Post', readonly id: string, readonly title: string, readonly date: string, readonly labels: ReadonlyArray<PostLabel>, readonly slug: string, readonly status: PostStatus };

export type ProjectFragment = { readonly __typename?: 'Project', readonly id: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly belonging?: { readonly __typename?: 'Organization', readonly id: string, readonly name: string, readonly employmentType: EmploymentType, readonly position?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly name: string, readonly proficiency: Proficiency }> };

export type SkillFragment = { readonly __typename?: 'Skill', readonly id: string, readonly name: string, readonly proficiency: Proficiency };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly title: string, readonly date: string, readonly labels: ReadonlyArray<PostLabel>, readonly slug: string, readonly status: PostStatus }> };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { readonly __typename?: 'Query', readonly profile: { readonly __typename?: 'Profile', readonly id: string, readonly name: string, readonly birthDate: string, readonly businessTitle: string, readonly speciality: string, readonly email: string, readonly message?: string | null, readonly accounts: ReadonlyArray<{ readonly __typename?: 'Account', readonly id: string, readonly name: string, readonly url: string }>, readonly skills: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly name: string, readonly proficiency: Proficiency }>, readonly educationalBackgrounds: ReadonlyArray<{ readonly __typename?: 'EducationalFacility', readonly id: string, readonly name: string, readonly department: string, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } }>, readonly workHistories: ReadonlyArray<{ readonly __typename?: 'Organization', readonly id: string, readonly name: string, readonly employmentType: EmploymentType, readonly position?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } }>, readonly projects: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly belonging?: { readonly __typename?: 'Organization', readonly id: string, readonly name: string, readonly employmentType: EmploymentType, readonly position?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly name: string, readonly proficiency: Proficiency }> }> } };

export const AccountFragmentDoc = gql`
    fragment Account on Account {
  id
  name
  url
}
    `;
export const PeriodFragmentDoc = gql`
    fragment Period on Period {
  start
  end
}
    `;
export const EducationalFacilityFragmentDoc = gql`
    fragment EducationalFacility on EducationalFacility {
  id
  name
  department
  period {
    ...Period
  }
}
    ${PeriodFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  id
  title
  date
  labels
  slug
  status
}
    `;
export const OrganizationFragmentDoc = gql`
    fragment Organization on Organization {
  id
  name
  period {
    ...Period
  }
  employmentType
  position
}
    ${PeriodFragmentDoc}`;
export const SkillFragmentDoc = gql`
    fragment Skill on Skill {
  id
  name
  proficiency
}
    `;
export const ProjectFragmentDoc = gql`
    fragment Project on Project {
  id
  title
  belonging {
    ...Organization
  }
  period {
    ...Period
  }
  position
  responsibility
  team
  technologies {
    ...Skill
  }
}
    ${OrganizationFragmentDoc}
${PeriodFragmentDoc}
${SkillFragmentDoc}`;
export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile {
  profile {
    id
    name
    birthDate
    businessTitle
    speciality
    accounts {
      ...Account
    }
    email
    message
    skills {
      ...Skill
    }
    educationalBackgrounds {
      ...EducationalFacility
    }
    workHistories {
      ...Organization
    }
    projects {
      ...Project
    }
  }
}
    ${AccountFragmentDoc}
${SkillFragmentDoc}
${EducationalFacilityFragmentDoc}
${OrganizationFragmentDoc}
${ProjectFragmentDoc}`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  EducationalFacility: ResolverTypeWrapper<EducationalFacility>;
  EmploymentType: EmploymentType;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Organization: ResolverTypeWrapper<Organization>;
  Period: ResolverTypeWrapper<Period>;
  Post: ResolverTypeWrapper<Post>;
  PostLabel: PostLabel;
  PostStatus: PostStatus;
  Proficiency: Proficiency;
  Profile: ResolverTypeWrapper<Profile>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Skill: ResolverTypeWrapper<Skill>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Boolean: Scalars['Boolean']['output'];
  EducationalFacility: EducationalFacility;
  ID: Scalars['ID']['output'];
  Organization: Organization;
  Period: Period;
  Post: Post;
  Profile: Profile;
  Project: Project;
  Query: {};
  Skill: Skill;
  String: Scalars['String']['output'];
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducationalFacilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationalFacility'] = ResolversParentTypes['EducationalFacility']> = ResolversObject<{
  department?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  employmentType?: Resolver<ResolversTypes['EmploymentType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  labels?: Resolver<ReadonlyArray<ResolversTypes['PostLabel']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PostStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  accounts?: Resolver<ReadonlyArray<ResolversTypes['Account']>, ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  businessTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  educationalBackgrounds?: Resolver<ReadonlyArray<ResolversTypes['EducationalFacility']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<ReadonlyArray<ResolversTypes['Project']>, ParentType, ContextType>;
  skills?: Resolver<ReadonlyArray<ResolversTypes['Skill']>, ParentType, ContextType>;
  speciality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  workHistories?: Resolver<ReadonlyArray<ResolversTypes['Organization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  belonging?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responsibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  technologies?: Resolver<ReadonlyArray<ResolversTypes['Skill']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  posts?: Resolver<ReadonlyArray<ResolversTypes['Post']>, ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
}>;

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proficiency?: Resolver<ResolversTypes['Proficiency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  EducationalFacility?: EducationalFacilityResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
}>;

