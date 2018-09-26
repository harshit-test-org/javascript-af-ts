import React from 'react';
import { Typography, Card, CardHeader, CardContent } from 'javascript-af-ui';
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

export const NewsItem: React.SFC<Props> = props => {
  const { title, slug, children, ...others } = props;
  return (
    <Link href={`/n/${slug}`}>
      <A>
        <Card elevation={1} style={{ marginBottom: '12px' }} {...others}>
          <CardHeader title={title} />
          <CardContent>
            <Typography>{children}</Typography>
          </CardContent>
        </Card>
      </A>
    </Link>
  );
};
