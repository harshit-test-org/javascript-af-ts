import * as React from 'react';
import gql from 'graphql-tag';
import {
  NewsItemQuery,
  NewsItemQuery_getNewsItemBySlug,
  NewsItemQueryVariables
} from '../../types';
import { Query } from 'react-apollo';

const query = gql`
  query NewsItemQuery($slug: String!) {
    getNewsItemBySlug(slug: $slug) {
      id
      title
      slug
      content
      writer {
        name
      }
      previewImage
      isFeatured
      createdAt
    }
  }
`;

interface Props {
  slug: string;
  children: (
    data: { data: NewsItemQuery_getNewsItemBySlug; loading: boolean }
  ) => JSX.Element | null;
}

export const NewsItemController: React.SFC<Props> = props => (
  <Query<NewsItemQuery, NewsItemQueryVariables>
    query={query}
    variables={{
      slug: props.slug
    }}>
    {({ loading, data }) => {
      return props.children({ data: data.getNewsItemBySlug, loading });
    }}
  </Query>
);
