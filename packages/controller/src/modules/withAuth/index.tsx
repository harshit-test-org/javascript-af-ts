import * as React from "react";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { meQuery } from "../../types";

const { Provider: AuthProvider, Consumer: AuthConsumer } = React.createContext(
  null
);

export { AuthConsumer, AuthProvider };

const meQuery = gql`
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

const withAuth = (AuthComposed: React.ComponentType<{ user?: any }>) => {
  class AuthWrapper extends React.Component<ChildProps<{}, meQuery>> {
    render() {
      const { data, ...rest } = this.props;
      const { error, loading, getUserInfo: user } = data;
      if (loading || !data) {
        return null;
      }

      if (error) {
        // return with no user
        return (
          <AuthProvider value={{ error, user: null }}>
            <AuthComposed {...rest} user={null} />
          </AuthProvider>
        );
      }
      return (
        <AuthProvider value={{ user }}>
          <AuthComposed {...rest} user={user} />
        </AuthProvider>
      );
    }
  }
  return graphql<{}, meQuery>(meQuery)(AuthWrapper);
};

export { withAuth };
