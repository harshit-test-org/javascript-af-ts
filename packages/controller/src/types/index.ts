/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewsItemQuery
// ====================================================

export interface NewsItemQuery_getNewsItemBySlug_writer {
  name: string;
}

export interface NewsItemQuery_getNewsItemBySlug {
  id: string;
  title: string;
  slug: string;
  content: string;
  writer: NewsItemQuery_getNewsItemBySlug_writer | null;
  previewImage: string | null;
  isFeatured: boolean | null;
  createdAt: string;
}

export interface NewsItemQuery {
  getNewsItemBySlug: NewsItemQuery_getNewsItemBySlug | null;
}

export interface NewsItemQueryVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewsItemsQuery
// ====================================================

export interface NewsItemsQuery_getNewsItems_writer {
  name: string;
}

export interface NewsItemsQuery_getNewsItems {
  id: string;
  title: string;
  slug: string;
  content: string;
  writer: NewsItemsQuery_getNewsItems_writer | null;
  previewImage: string | null;
  createdAt: string;
}

export interface NewsItemsQuery {
  getNewsItems: NewsItemsQuery_getNewsItems[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RepositoriesQuery
// ====================================================

export interface RepositoriesQuery_getRepositories {
  id: string;
  githubName: string;
  githubOwner: string;
  slug: string;
  description: string | null;
  createdAt: string;
}

export interface RepositoriesQuery {
  getRepositories: RepositoriesQuery_getRepositories[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RepositoryQuery
// ====================================================

export interface RepositoryQuery_getRepositoryBySlug {
  id: string;
  slug: string;
  githubUrl: string;
  githubName: string;
  githubOwner: string;
  ownerUsername: string;
  isFeatured: boolean | null;
  description: string | null;
  createdAt: string;
}

export interface RepositoryQuery {
  getRepositoryBySlug: RepositoryQuery_getRepositoryBySlug | null;
}

export interface RepositoryQueryVariables {
  slug: string;
  ownerUsername: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TalkQuery
// ====================================================

export interface TalkQuery_getTalkBySlug {
  id: string;
  title: string;
  slug: string;
  iframe: string;
  speaker: string | null;
  previewImage: string;
  isFeatured: boolean | null;
  createdAt: string;
}

export interface TalkQuery {
  getTalkBySlug: TalkQuery_getTalkBySlug | null;
}

export interface TalkQueryVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TalksQuery
// ====================================================

export interface TalksQuery_getTalks {
  speaker: string | null;
  id: string;
  iframe: string;
  createdAt: string;
  previewImage: string;
  title: string;
  slug: string;
}

export interface TalksQuery {
  getTalks: TalksQuery_getTalks[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_getUserInfo {
  name: string;
  username: string;
  email: string;
  githubToken: string;
  updatedAt: string | null;
}

export interface meQuery {
  getUserInfo: meQuery_getUserInfo | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
