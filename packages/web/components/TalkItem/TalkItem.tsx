import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from 'javascript-af-ui';
import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  slug: string;
}

export const TalkItem: React.SFC<Props> = props => {
  const { title, slug, children, ...others } = props;
  return (
    <Card
      elevation={2}
      style={{
        maxWidth: '300px',
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography>{slug}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/t/${slug}`}>
          <Button>View!!</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
