import React from "react";
import { Typography, Card, CardHeader, CardContent } from "javascript-af-ui";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
}

export const NewsItem: React.SFC<Props> = props => {
  const { title, children, ...others } = props;
  return (
    <Card elevation={1} style={{ marginBottom: "12px" }} {...others}>
      <CardHeader title={title} />
      <CardContent>
        <Typography>{children}</Typography>
      </CardContent>
    </Card>
  );
};
