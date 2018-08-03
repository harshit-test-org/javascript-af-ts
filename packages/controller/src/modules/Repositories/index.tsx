import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {
  RepositoriesQuery,
  RepositoriesQuery_getRepositories
} from "../../types";

const RepositoriesQuery = gql`
  query RepositoriesQuery {
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
    data: { data: RepositoriesQuery_getRepositories[] | null; loading: boolean }
  ) => JSX.Element | null;
}

export const RepositoriesController: React.SFC<Props> = props => (
  <Query<RepositoriesQuery> query={RepositoriesQuery}>
    {({ data, loading }) => {
      return props.children({ data: data.getRepositories, loading });
    }}
  </Query>
);
