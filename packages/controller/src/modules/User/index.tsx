import * as React from "react";
import gql from "graphql-tag";
import { meQuery } from "../../types";
import { Query, QueryResult } from "react-apollo";

const { Provider: AuthProvider, Consumer: AuthConsumer } = React.createContext({
  user: null,
  error: null
});

export { AuthConsumer, AuthProvider };

const QmeQuery = gql`
  query meQuery {
    getUserInfo {
      name
      username
      email
      githubToken
      updatedAt
    }
  }
`;

const User = (props: { children: (result: QueryResult<meQuery>) => any }) => (
  <Query<meQuery> {...props} query={QmeQuery}>
    {result => props.children(result)}
  </Query>
);

export { User };
