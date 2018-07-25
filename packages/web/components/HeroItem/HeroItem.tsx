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
  align-items: center;
  background: black;
  background-image: url("${(props: Props) => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 4px 0 4px  rgba(0,0,0,0.1);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props: Props) => props.bgColor};
    opacity: 0.75;
  }
  h3, h4 {
    margin: 2vw;
    z-index: 1;
  }
`;

export const HeroItem: React.SFC<Props> = props => {
  const { bgColor, image, heading = "h3", children } = props;
  return (
    <HeroCard bgColor={bgColor} image={image}>
      <Typography type={heading as any} color="#fff">
        {children}
      </Typography>
    </HeroCard>
  );
};
