import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { RepositoryQuery, RepositoryQuery_getRepositories } from "../../types";

const RepositoryQuery = gql`
  query RepositoryQuery {
    getRepositories {
      id
      githubName
      githubOwner
      slug
      description
      createdAt
    }
  }
`;

interface Props {
  children: (
    data: { data: RepositoryQuery_getRepositories[] | null; loading: boolean }
  ) => JSX.Element | null;
}

export const RepositoryController: React.SFC<Props> = props => (
  <Query<RepositoryQuery> query={RepositoryQuery}>
    {({ data, loading }) => {
      return props.children({ data: data.getRepositories, loading });
    }}
  </Query>
);
