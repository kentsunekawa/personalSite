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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  readonly name: SocialMedia;
  readonly url: Scalars['String']['output'];
};

export type EducationalBackground = {
  readonly __typename?: 'EducationalBackground';
  readonly department: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly period: Period;
};

export const EmploymentType = {
  Fulltime: 'FULLTIME'
} as const;

export type EmploymentType = typeof EmploymentType[keyof typeof EmploymentType];
export const Lang = {
  En: 'EN',
  Ja: 'JA'
} as const;

export type Lang = typeof Lang[keyof typeof Lang];
export const LangLevel = {
  Business: 'BUSINESS',
  Daily: 'DAILY',
  Native: 'NATIVE'
} as const;

export type LangLevel = typeof LangLevel[keyof typeof LangLevel];
export type LangSKill = {
  readonly __typename?: 'LangSKill';
  readonly lang: Lang;
  readonly level: LangLevel;
};

export type Period = {
  readonly __typename?: 'Period';
  readonly end?: Maybe<Scalars['String']['output']>;
  readonly start: Scalars['String']['output'];
};

export type Post = {
  readonly __typename?: 'Post';
  readonly content: Scalars['String']['output'];
  readonly date: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly labels: ReadonlyArray<PostLabel>;
  readonly lang: PostLang;
  readonly slug: Scalars['String']['output'];
  readonly status: PostStatus;
  readonly title: Scalars['String']['output'];
};

export const PostLabel = {
  HighPriority: 'HIGH_PRIORITY'
} as const;

export type PostLabel = typeof PostLabel[keyof typeof PostLabel];
export type PostLang = {
  readonly __typename?: 'PostLang';
  readonly EN: Scalars['Boolean']['output'];
  readonly JA: Scalars['Boolean']['output'];
};

export const PostStatus = {
  Draft: 'DRAFT',
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
  readonly educationalBackgrounds: ReadonlyArray<EducationalBackground>;
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly image?: Maybe<Scalars['String']['output']>;
  readonly introduction?: Maybe<Scalars['String']['output']>;
  readonly languages: ReadonlyArray<LangSKill>;
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly place: Scalars['String']['output'];
  readonly projects: ReadonlyArray<Project>;
  readonly skills: ReadonlyArray<Skill>;
  readonly speciality: Scalars['String']['output'];
  readonly subName?: Maybe<Scalars['String']['output']>;
  readonly workHistories: ReadonlyArray<WorkHistory>;
};

export type Project = {
  readonly __typename?: 'Project';
  readonly belonging?: Maybe<WorkHistory>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly period: Period;
  readonly position?: Maybe<Scalars['String']['output']>;
  readonly responsibility?: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly summary?: Maybe<Scalars['String']['output']>;
  readonly team?: Maybe<Scalars['String']['output']>;
  readonly technologies: ReadonlyArray<Skill>;
  readonly title: Scalars['String']['output'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly post?: Maybe<Post>;
  readonly posts: ReadonlyArray<Post>;
  readonly profile: Profile;
  readonly projects: ReadonlyArray<Project>;
  readonly resume?: Maybe<Resume>;
};


export type QueryPostArgs = {
  lang?: InputMaybe<Lang>;
  slug: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  lang?: InputMaybe<Lang>;
  searchPostsInput?: InputMaybe<SearchPostsInput>;
};


export type QueryProfileArgs = {
  lang?: InputMaybe<Lang>;
};


export type QueryProjectsArgs = {
  lang?: InputMaybe<Lang>;
};


export type QueryResumeArgs = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Lang>;
};

export type Resume = {
  readonly __typename?: 'Resume';
  readonly introduction?: Maybe<Scalars['String']['output']>;
  readonly lang: Lang;
  readonly projects: ReadonlyArray<Project>;
  readonly skills: ReadonlyArray<Skill>;
  readonly summary: Scalars['String']['output'];
  readonly workHistories: ReadonlyArray<WorkHistory>;
};

export type SearchPostsInput = {
  readonly labels?: InputMaybe<ReadonlyArray<PostLabel>>;
  readonly status?: InputMaybe<ReadonlyArray<PostStatus>>;
};

export type Skill = {
  readonly __typename?: 'Skill';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly proficiency: Proficiency;
  readonly slug: Scalars['String']['output'];
  readonly summary?: Maybe<Scalars['String']['output']>;
};

export const SocialMedia = {
  Facebook: 'FACEBOOK',
  Github: 'GITHUB',
  Instagram: 'INSTAGRAM',
  Linkedin: 'LINKEDIN',
  Wantedly: 'WANTEDLY'
} as const;

export type SocialMedia = typeof SocialMedia[keyof typeof SocialMedia];
export type WorkHistory = {
  readonly __typename?: 'WorkHistory';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly employmentType?: Maybe<EmploymentType>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly period: Period;
  readonly position?: Maybe<Scalars['String']['output']>;
  readonly slug: Scalars['String']['output'];
  readonly summary?: Maybe<Scalars['String']['output']>;
};

export type AccountFragment = { readonly __typename?: 'Account', readonly id: string, readonly name: SocialMedia, readonly url: string };

export type EducationalBackgroundFragment = { readonly __typename?: 'EducationalBackground', readonly id: string, readonly name: string, readonly department: string, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } };

export type PeriodFragment = { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null };

export type PostFragment = { readonly __typename?: 'Post', readonly id: string, readonly title: string, readonly date: string, readonly labels: ReadonlyArray<PostLabel>, readonly slug: string, readonly status: PostStatus, readonly content: string, readonly lang: { readonly __typename?: 'PostLang', readonly EN: boolean, readonly JA: boolean } };

export type ProjectFragment = { readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly belonging?: { readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }> };

export type ResumeFragment = { readonly __typename?: 'Resume', readonly lang: Lang, readonly summary: string, readonly introduction?: string | null, readonly projects: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly belonging?: { readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }> }>, readonly skills: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }>, readonly workHistories: ReadonlyArray<{ readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } }> };

export type SkillFragment = { readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null };

export type WorkHistoryFragment = { readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } };

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  lang?: InputMaybe<Lang>;
}>;


export type GetPostQuery = { readonly __typename?: 'Query', readonly post?: { readonly __typename?: 'Post', readonly id: string, readonly title: string, readonly date: string, readonly labels: ReadonlyArray<PostLabel>, readonly slug: string, readonly status: PostStatus, readonly content: string, readonly lang: { readonly __typename?: 'PostLang', readonly EN: boolean, readonly JA: boolean } } | null };

export type GetPostsQueryVariables = Exact<{
  lang?: InputMaybe<Lang>;
  searchPostsInput?: InputMaybe<SearchPostsInput>;
}>;


export type GetPostsQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly title: string, readonly date: string, readonly labels: ReadonlyArray<PostLabel>, readonly slug: string, readonly status: PostStatus, readonly content: string, readonly lang: { readonly __typename?: 'PostLang', readonly EN: boolean, readonly JA: boolean } }> };

export type GetProfileQueryVariables = Exact<{
  lang?: InputMaybe<Lang>;
}>;


export type GetProfileQuery = { readonly __typename?: 'Query', readonly profile: { readonly __typename?: 'Profile', readonly id: string, readonly name: string, readonly subName?: string | null, readonly image?: string | null, readonly birthDate: string, readonly place: string, readonly businessTitle: string, readonly speciality: string, readonly email: string, readonly introduction?: string | null, readonly message?: string | null, readonly languages: ReadonlyArray<{ readonly __typename?: 'LangSKill', readonly lang: Lang, readonly level: LangLevel }>, readonly accounts: ReadonlyArray<{ readonly __typename?: 'Account', readonly id: string, readonly name: SocialMedia, readonly url: string }>, readonly skills: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }>, readonly educationalBackgrounds: ReadonlyArray<{ readonly __typename?: 'EducationalBackground', readonly id: string, readonly name: string, readonly department: string, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } }>, readonly workHistories: ReadonlyArray<{ readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } }>, readonly projects: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly belonging?: { readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }> }> } };

export type GetProjectsQueryVariables = Exact<{
  lang?: InputMaybe<Lang>;
}>;


export type GetProjectsQuery = { readonly __typename?: 'Query', readonly projects: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly belonging?: { readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }> }> };

export type GetResumeQueryVariables = Exact<{
  companyName?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Lang>;
}>;


export type GetResumeQuery = { readonly __typename?: 'Query', readonly resume?: { readonly __typename?: 'Resume', readonly lang: Lang, readonly summary: string, readonly introduction?: string | null, readonly projects: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly position?: string | null, readonly responsibility?: string | null, readonly team?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly belonging?: { readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } } | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null }, readonly technologies: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }> }>, readonly skills: ReadonlyArray<{ readonly __typename?: 'Skill', readonly id: string, readonly slug: string, readonly name: string, readonly proficiency: Proficiency, readonly summary?: string | null }>, readonly workHistories: ReadonlyArray<{ readonly __typename?: 'WorkHistory', readonly id: string, readonly slug: string, readonly name: string, readonly employmentType?: EmploymentType | null, readonly position?: string | null, readonly summary?: string | null, readonly description?: string | null, readonly period: { readonly __typename?: 'Period', readonly start: string, readonly end?: string | null } }> } | null };

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
export const EducationalBackgroundFragmentDoc = gql`
    fragment EducationalBackground on EducationalBackground {
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
  content
  lang {
    EN
    JA
  }
}
    `;
export const WorkHistoryFragmentDoc = gql`
    fragment WorkHistory on WorkHistory {
  id
  slug
  name
  period {
    ...Period
  }
  employmentType
  position
  summary
  description
}
    ${PeriodFragmentDoc}`;
export const SkillFragmentDoc = gql`
    fragment Skill on Skill {
  id
  slug
  name
  proficiency
  summary
}
    `;
export const ProjectFragmentDoc = gql`
    fragment Project on Project {
  id
  slug
  title
  belonging {
    ...WorkHistory
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
  summary
  description
}
    ${WorkHistoryFragmentDoc}
${PeriodFragmentDoc}
${SkillFragmentDoc}`;
export const ResumeFragmentDoc = gql`
    fragment Resume on Resume {
  lang
  summary
  projects {
    ...Project
  }
  skills {
    ...Skill
  }
  introduction
  workHistories {
    ...WorkHistory
  }
}
    ${ProjectFragmentDoc}
${SkillFragmentDoc}
${WorkHistoryFragmentDoc}`;
export const GetPostDocument = gql`
    query GetPost($slug: String!, $lang: Lang) {
  post(slug: $slug, lang: $lang) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($lang: Lang, $searchPostsInput: SearchPostsInput) {
  posts(lang: $lang, searchPostsInput: $searchPostsInput) {
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
 *      lang: // value for 'lang'
 *      searchPostsInput: // value for 'searchPostsInput'
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
    query GetProfile($lang: Lang) {
  profile(lang: $lang) {
    id
    name
    subName
    image
    birthDate
    place
    languages {
      lang
      level
    }
    businessTitle
    speciality
    accounts {
      ...Account
    }
    email
    introduction
    message
    skills {
      ...Skill
    }
    educationalBackgrounds {
      ...EducationalBackground
    }
    workHistories {
      ...WorkHistory
    }
    projects {
      ...Project
    }
    message
  }
}
    ${AccountFragmentDoc}
${SkillFragmentDoc}
${EducationalBackgroundFragmentDoc}
${WorkHistoryFragmentDoc}
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
 *      lang: // value for 'lang'
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
export const GetProjectsDocument = gql`
    query GetProjects($lang: Lang) {
  projects(lang: $lang) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetResumeDocument = gql`
    query GetResume($companyName: String, $lang: Lang) {
  resume(companyName: $companyName, lang: $lang) {
    ...Resume
  }
}
    ${ResumeFragmentDoc}`;

/**
 * __useGetResumeQuery__
 *
 * To run a query within a React component, call `useGetResumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResumeQuery({
 *   variables: {
 *      companyName: // value for 'companyName'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetResumeQuery(baseOptions?: Apollo.QueryHookOptions<GetResumeQuery, GetResumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResumeQuery, GetResumeQueryVariables>(GetResumeDocument, options);
      }
export function useGetResumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResumeQuery, GetResumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResumeQuery, GetResumeQueryVariables>(GetResumeDocument, options);
        }
export type GetResumeQueryHookResult = ReturnType<typeof useGetResumeQuery>;
export type GetResumeLazyQueryHookResult = ReturnType<typeof useGetResumeLazyQuery>;
export type GetResumeQueryResult = Apollo.QueryResult<GetResumeQuery, GetResumeQueryVariables>;
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
  EducationalBackground: ResolverTypeWrapper<EducationalBackground>;
  EmploymentType: EmploymentType;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Lang: Lang;
  LangLevel: LangLevel;
  LangSKill: ResolverTypeWrapper<LangSKill>;
  Period: ResolverTypeWrapper<Period>;
  Post: ResolverTypeWrapper<Post>;
  PostLabel: PostLabel;
  PostLang: ResolverTypeWrapper<PostLang>;
  PostStatus: PostStatus;
  Proficiency: Proficiency;
  Profile: ResolverTypeWrapper<Profile>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Resume: ResolverTypeWrapper<Resume>;
  SearchPostsInput: SearchPostsInput;
  Skill: ResolverTypeWrapper<Skill>;
  SocialMedia: SocialMedia;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  WorkHistory: ResolverTypeWrapper<WorkHistory>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Boolean: Scalars['Boolean']['output'];
  EducationalBackground: EducationalBackground;
  ID: Scalars['ID']['output'];
  LangSKill: LangSKill;
  Period: Period;
  Post: Post;
  PostLang: PostLang;
  Profile: Profile;
  Project: Project;
  Query: {};
  Resume: Resume;
  SearchPostsInput: SearchPostsInput;
  Skill: Skill;
  String: Scalars['String']['output'];
  WorkHistory: WorkHistory;
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['SocialMedia'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducationalBackgroundResolvers<ContextType = any, ParentType extends ResolversParentTypes['EducationalBackground'] = ResolversParentTypes['EducationalBackground']> = ResolversObject<{
  department?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LangSKillResolvers<ContextType = any, ParentType extends ResolversParentTypes['LangSKill'] = ResolversParentTypes['LangSKill']> = ResolversObject<{
  lang?: Resolver<ResolversTypes['Lang'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['LangLevel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  labels?: Resolver<ReadonlyArray<ResolversTypes['PostLabel']>, ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['PostLang'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PostStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostLangResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostLang'] = ResolversParentTypes['PostLang']> = ResolversObject<{
  EN?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  JA?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  accounts?: Resolver<ReadonlyArray<ResolversTypes['Account']>, ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  businessTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  educationalBackgrounds?: Resolver<ReadonlyArray<ResolversTypes['EducationalBackground']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  introduction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  languages?: Resolver<ReadonlyArray<ResolversTypes['LangSKill']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<ReadonlyArray<ResolversTypes['Project']>, ParentType, ContextType>;
  skills?: Resolver<ReadonlyArray<ResolversTypes['Skill']>, ParentType, ContextType>;
  speciality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workHistories?: Resolver<ReadonlyArray<ResolversTypes['WorkHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  belonging?: Resolver<Maybe<ResolversTypes['WorkHistory']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responsibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  technologies?: Resolver<ReadonlyArray<ResolversTypes['Skill']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'slug'>>;
  posts?: Resolver<ReadonlyArray<ResolversTypes['Post']>, ParentType, ContextType, Partial<QueryPostsArgs>>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, Partial<QueryProfileArgs>>;
  projects?: Resolver<ReadonlyArray<ResolversTypes['Project']>, ParentType, ContextType, Partial<QueryProjectsArgs>>;
  resume?: Resolver<Maybe<ResolversTypes['Resume']>, ParentType, ContextType, Partial<QueryResumeArgs>>;
}>;

export type ResumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resume'] = ResolversParentTypes['Resume']> = ResolversObject<{
  introduction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lang?: Resolver<ResolversTypes['Lang'], ParentType, ContextType>;
  projects?: Resolver<ReadonlyArray<ResolversTypes['Project']>, ParentType, ContextType>;
  skills?: Resolver<ReadonlyArray<ResolversTypes['Skill']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  workHistories?: Resolver<ReadonlyArray<ResolversTypes['WorkHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proficiency?: Resolver<ResolversTypes['Proficiency'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkHistory'] = ResolversParentTypes['WorkHistory']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentType?: Resolver<Maybe<ResolversTypes['EmploymentType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Period'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  EducationalBackground?: EducationalBackgroundResolvers<ContextType>;
  LangSKill?: LangSKillResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostLang?: PostLangResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resume?: ResumeResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  WorkHistory?: WorkHistoryResolvers<ContextType>;
}>;

