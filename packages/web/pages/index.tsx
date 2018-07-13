import * as React from "react";
import {
  Button,
  Typography,
  CardHorizontalScroller,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Cell
} from "javascript-af-ui";
import Layout from "../components/Layouts";
import {
  RepositoryController,
  NewsItemController,
  TalksController
} from "@jsaf/controller";
import { HeroSection } from "../components/HeroSection";
import shuffle from "lodash.shuffle";
import { HERO_COLORS } from "../constants";

const shuffled = shuffle(HERO_COLORS);

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <Grid
        columns={3}
        gap="10px"
        rows={3}
        areas={["hero hero tile1", "hero hero tile2", "hero hero tile3"]}
      >
        <Cell area={"hero"}>
          <HeroSection bgColor={shuffled[0]}>
            {/* Lets use typography now*/}
            Zeit released v2 of hyper terminal
          </HeroSection>
        </Cell>
        <Cell area={"tile1"}>
          <HeroSection
            heading="h4"
            bgColor={shuffled[1]}
            image="https://hptechblogs.com/content/images/2017/08/f590050bbc2c4fe4d26e7d02dfa48666.jpg"
          >
            Nextjs hit v6.1.1
          </HeroSection>
        </Cell>
        <Cell area={"tile2"}>
          <HeroSection bgColor={shuffled[2]} heading="h4">
            Apollo teased the defer features incoming
          </HeroSection>
        </Cell>
        <Cell area={"tile3"}>
          <HeroSection
            bgColor={shuffled[3]}
            heading="h4"
            image="https://hptechblogs.com/content/images/2017/08/jwt_react.png"
          >
            Andrew Clark gave demo with {"'"}Suspense{"'"}
          </HeroSection>
        </Cell>
      </Grid>
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
      <NewsItemController>
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
                  <CardHeader title={item.title} />
                  <CardContent>
                    <Typography>{item.slug}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>View</Button>
                  </CardActions>
                </Card>
              ))}
            </CardHorizontalScroller>
          );
        }}
      </NewsItemController>
      <TalksController>
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
                  <CardHeader title={item.title} />
                  <CardContent>
                    <Typography>{item.slug}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>View</Button>
                  </CardActions>
                </Card>
              ))}
            </CardHorizontalScroller>
          );
        }}
      </TalksController>
    </Layout>
  );
};

export default Index;
