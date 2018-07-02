import * as React from "react";
import { Button, Typography } from "javascript-af-ui";
import Layout from "../components/Layouts";
import { RepositoryController } from "@jsaf/controller";

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <Button>Hello World</Button>
      <RepositoryController>
        {({ data, loading }) => {
          if (loading) {
            return <h1>loading</h1>;
          }
          return (
            <>
              {data.map(item => (
                <Typography type="h2" margin={0} key={item.id}>
                  {item.githubName}
                </Typography>
              ))}
            </>
          );
        }}
      </RepositoryController>
    </Layout>
  );
};

export default Index;
