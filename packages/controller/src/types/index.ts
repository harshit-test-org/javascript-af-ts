

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RepositoryQuery
// ====================================================

export interface RepositoryQuery_getRepositories {
  id: string;
  githubName: string;
  githubOwner: string;
  slug: string;
  description: string | null;
  createdAt: string;
}

export interface RepositoryQuery {
  getRepositories: RepositoryQuery_getRepositories[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewsItemQuery
// ====================================================

export interface NewsItemQuery_getNewsItems_writer {
  name: string;
}

export interface NewsItemQuery_getNewsItems {
  id: string;
  title: string;
  slug: string;
  content: string;
  writer: NewsItemQuery_getNewsItems_writer | null;
  previewImage: string | null;
  createdAt: string;
}

export interface NewsItemQuery {
  getNewsItems: NewsItemQuery_getNewsItems[] | null;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================