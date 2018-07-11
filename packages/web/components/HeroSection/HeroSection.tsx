import * as React from "react";
import styled from "styled-components";
import { Typography } from "javascript-af-ui";

interface Props {
  image?: string;
  bgColor: string;
  heading?: string;
}

const HeroCard = styled.div`
  display: grid;
  background: black;
  height: 100%;
  position: relative;
  background-image: url("${(props: Props) => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props: Props) => props.bgColor};
    opacity: 0.75;
  }
  h3,
  h4 {  
    z-index: 5;
    margin-left: 10px;
  }
`;

export class HeroSection extends React.Component<Props, {}> {
  render() {
    const { bgColor, image, heading = "h3", children } = this.props;
    return (
      <HeroCard bgColor={bgColor} image={image}>
        <Typography type={heading as any} color="#fff">
          {children}
        </Typography>
      </HeroCard>
    );
  }
}
