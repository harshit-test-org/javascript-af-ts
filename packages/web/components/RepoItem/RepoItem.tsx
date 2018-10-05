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
  description: string;
  githubUser: string;
  githubRepo: string;
}

export const RepoItem: React.SFC<Props> = props => {
  const {
    title,
    description,
    githubUser,
    githubRepo,
    children,
    ...others
  } = props;

  return (
    <Card elevation={2} style={{ maxWidth: '300px' }}>
      <Link href={`/r/${githubUser}/${githubRepo}`}>
        <A>
          <CardHeader title={title} />
        </A>
      </Link>
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/r/${githubUser}/${githubRepo}`}>
          <Button>View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
