import * as React from "react";
import {
  Button,
  Typography,
  CardHorizontalScroller,
  Card,
  CardHeader,
  CardContent,
  CardActions
} from "javascript-af-ui";
import Layout from "../components/Layouts";
import { RepositoryController } from "@jsaf/controller";

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <RepositoryController>
        {({ data, loading }) => {
          if (loading) {
            return <h1>loading</h1>;
          }
          return (
            <CardHorizontalScroller style={{ width: "calc(100% - 32px)" }}>
              {data.map(item => (
                <Card
                  key={item.id}
                  elevation={2}
                  style={{
                    maxWidth: "300px"
                  }}
                >
                  <CardHeader title={item.githubName} />
                  <CardContent>
                    <Typography>{item.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>View</Button>
                  </CardActions>
                </Card>
              ))}
            </CardHorizontalScroller>
          );
        }}
      </RepositoryController>
    </Layout>
  );
};

export default Index;
