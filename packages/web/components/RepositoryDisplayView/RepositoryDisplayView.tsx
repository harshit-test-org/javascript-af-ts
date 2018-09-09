import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  CardHorizontalScroller,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from 'javascript-af-ui';
import { RepoDisplayCard } from './RepoDisplayCard';

const RepoFeaturedGrid = styled.div`
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, minmax(35vh, 1fr));
  grid-template-areas: 'item item1' 'item2 item3';
  & > :nth-child(1) {
    grid-area: item;
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
    grid-template-areas: 'item' 'item2' 'item3' 'item1';
  }
`;

const CardHorizontalScrollerS = styled(CardHorizontalScroller)`
  > div {
    width: auto;
  }
`;

const RepoCardContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
`;

const PaddingContainer = styled.div`
  padding: 1rem;
  background: rgba(247, 236, 236, 0.55);
`;

export class RepositoryDisplayView extends React.Component {
  render() {
    return (
      <PaddingContainer>
        <RepoFeaturedGrid>
          <RepoDisplayCard
            bg="#8e44ad"
            title="Downshift"
            tags={['react', 'dropdown']}
            description="Primitive to build simple, flexible, WAI-ARIA compliant enhanced input React components"
          />
          <RepoDisplayCard
            bg="#27ae60"
            title="Vue"
            tags={['vue', 'jslib']}
            description="A progressive, incrementally-adoptable JavaScript framework for building UI on the web."
          />
          <RepoDisplayCard
            bg="#f39c12"
            title="Ember"
            tags={['emberjs', 'wombat']}
            description="Ember.js - A JavaScript framework for creating ambitious web applications "
          />
          <RepoDisplayCard
            bg="#c0392b"
            title="angular-neo4j"
            tags={['angular', 'neo4j', 'service']}
            description="Neo4j Bolt driver wrapper for Angular"
          />
        </RepoFeaturedGrid>
        <Typography type="h2">Top Repositories</Typography>
        <CardHorizontalScrollerS>
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              elevation={2}
              style={{
                minWidth: '300px'
              }}>
              <CardHeader title="Downshift" />
              <CardContent>
                <Typography>
                  Primitive to build simple, flexible, WAI-ARIA compliant
                  enhanced input React components
                </Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          ))}
        </CardHorizontalScrollerS>
        <Typography type="h3">#React</Typography>
        <CardHorizontalScrollerS>
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              elevation={2}
              style={{
                minWidth: '300px'
              }}>
              <CardHeader title="Downshift" />
              <CardContent>
                <Typography>
                  Primitive to build simple, flexible, WAI-ARIA compliant
                  enhanced input React components
                </Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          ))}
        </CardHorizontalScrollerS>
        <Typography type="h3">#Angular</Typography>
        <CardHorizontalScrollerS>
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              elevation={2}
              style={{
                minWidth: '300px'
              }}>
              <CardHeader title="Downshift" />
              <CardContent>
                <Typography>
                  Primitive to build simple, flexible, WAI-ARIA compliant
                  enhanced input React components
                </Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          ))}
        </CardHorizontalScrollerS>
        <Typography type="h2">Discover</Typography>
        <RepoCardContainer>
          {Array.from({ length: 100 }).map((_, i) => (
            <Card key={i} elevation={2}>
              <CardHeader title="Vue" />
              <CardContent>
                <Typography>
                  A progressive, incrementally-adoptable JavaScript framework
                  for building UI on the web.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          ))}
        </RepoCardContainer>
      </PaddingContainer>
    );
  }
}
