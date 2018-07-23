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
import {
  RepositoryController,
  NewsItemController,
  TalksController,
  withAuth
} from "../../controller/dist";
import { HeroItem } from "../components/HeroItem";
import shuffle from "lodash.shuffle";
import { HERO_COLORS } from "../constants";
import styled from "styled-components";

const shuffled = shuffle(HERO_COLORS);

const HeroTop = styled.section`
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, minmax(15vh, 1fr));
  grid-template-areas: "featured item1" "featured item2" "featured item3";
  & > :nth-child(1) {
    grid-area: featured;
    align-content: end;
  }
  & > :nth-child(2) {
    grid-area: item1;
  }
  & > :nth-child(3) {
    grid-area: item2;
  }
  & > :nth-child(4) {
    grid-area: item3;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr repeat(3, minmax(15vh, 1fr));
    grid-template-areas: "featured" "item2" "item3" "item1";
  }
`;

const Index: React.SFC<{}> = () => {
  return (
    <Layout>
      <HeroTop>
        <HeroItem bgColor={shuffled[0]}>
          Zeit released v2 of hyper terminal
        </HeroItem>
        <HeroItem
          heading="h4"
          bgColor={shuffled[1]}
          image="https://hptechblogs.com/content/images/2017/08/f590050bbc2c4fe4d26e7d02dfa48666.jpg"
        >
          Nextjs hit v6.1.1
        </HeroItem>
        <HeroItem bgColor={shuffled[2]} heading="h4">
          Apollo teased the defer features incoming
        </HeroItem>
        <HeroItem
          bgColor={shuffled[3]}
          heading="h4"
          image="https://hptechblogs.com/content/images/2017/08/jwt_react.png"
        >
          Andrew Clark gave demo with {"'"}Suspense{"'"}
        </HeroItem>
      </HeroTop>
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

export default withAuth(Index);
