import * as React from 'react';
import styled from 'styled-components';
import { Typography } from 'javascript-af-ui';

const TimeIcon = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

const TalksGrid = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 25%;
  grid-template-rows: 75vh 1fr;
  grid-template-areas: 'video side' ' info side';
`;

const VideoArea = styled.div`
  grid-area: video;
  iframe {
    border: 0;
    height: 100%;
    width: 100%;
  }
`;

const InfoArea = styled.div`
  grid-area: info;
  display: grid;
  grid-template-rows: 2rem 1fr;
  grid-template-columns: 1fr 20%;
  padding: 1rem;
  .heading {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    h2 {
      font-family: 'Fira Sans', monospace;
    }
    p {
      margin-top: 1rem;
      font-size: 18px;
      font-family: 'Fira Mono', sans-serif;
    }
  }
  .tags {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    a {
      font-family: 'Fira Mono', monospace;
      color: blue;
      letter-spacing: 2px;
      text-decoration: none;
    }
  }
  .length {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    svg {
      margin-right: 3%;
      width: 30px;
      height: 30px;
    }
  }
`;

export class TalksView extends React.Component {
  render() {
    return (
      <TalksGrid>
        <VideoArea>
          <iframe
            src="https://www.youtube.com/embed/z-6JC0_cOns"
            allowFullScreen={true}
            frameBorder={0}
          />
        </VideoArea>

        <InfoArea>
          <div className="tags">
            <Typography type="h5" component="a" href="/something" margin={0}>
              #programming
            </Typography>
          </div>
          <div className="length">
            <TimeIcon />
            <Typography type="h5" margin={0}>
              25 mins
            </Typography>
          </div>
          <div className="heading">
            <Typography type="h2" margin={0}>
              React Suspance
            </Typography>
            <Typography component="p" margin={0}>
              Async rendering in React gives us a powerful new set of primitives
              for addressing longstanding problems in UI development. I'll
              discuss React's vision for how async rendering can improve data
              fetching, code delivery, prefetching, view transitions, and more.
              You can read more about our products and mission here:
              https://zeit.co
            </Typography>
          </div>
        </InfoArea>
      </TalksGrid>
    );
  }
}
