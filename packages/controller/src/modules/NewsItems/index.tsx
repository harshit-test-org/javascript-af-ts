import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { NewsItemsQuery, NewsItemsQuery_getNewsItems } from '../../types';

const NewsItemsQuery = gql`
  query NewsItemsQuery {
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
    data: { data: NewsItemsQuery_getNewsItems[] | null; loading: boolean }
  ) => JSX.Element | null;
}

export const NewsItemsController: React.SFC<Props> = props => (
  <Query<NewsItemsQuery> query={NewsItemsQuery}>
    {({ data, loading }) => {
      return props.children({ data: data.getNewsItems, loading });
    }}
  </Query>
);
