import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { NewsItemQuery, NewsItemQuery_getNewsItems } from "../../types";

const NewsItemQuery = gql`
  query NewsItemQuery {
    getNewsItems {
      id
      title
      slug
      content
      writer {
        name
      }
      previewImage
      createdAt
      content
    }
  }
`;

interface Props {
  children: (
    data: { data: NewsItemQuery_getNewsItems[] | null; loading: boolean }
  ) => JSX.Element | null;
}

export const NewsItemController: React.SFC<Props> = props => (
  <Query<NewsItemQuery> query={NewsItemQuery}>
    {({ data, loading }) => {
      return props.children({ data: data.getNewsItems, loading });
    }}
  </Query>
);
