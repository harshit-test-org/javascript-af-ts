import * as React from "react";
import { Button, Typography } from "javascript-af-ui";
import Layout from "../components/Layouts";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SampleQuery = gql`
  {
    getRepositories {
      githubName
      id
    }
  }
`;

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <Button>Hello World</Button>
      <Query query={SampleQuery}>
        {({ data }) => {
          const { getRepositories } = data;
          return (
            <>
              {getRepositories.map(item => (
                <Typography type="h2" margin={0} key={item.id}>
                  {item.githubName}
                </Typography>
              ))}
            </>
          );
        }}
      </Query>
    </Layout>
  );
};

export default Index;
