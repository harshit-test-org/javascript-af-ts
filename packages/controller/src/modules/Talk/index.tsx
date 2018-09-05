import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  TalkQuery_getTalkBySlug,
  TalkQuery,
  TalkQueryVariables
} from '../../types';

const query = gql`
  query TalkQuery($slug: String!) {
    getTalkBySlug(slug: $slug) {
      id
      title
      slug
      iframe
      speaker
      previewImage
      isFeatured
      createdAt
    }
  }
`;

interface Props {
  slug: string;
  children: (
    data: { data: TalkQuery_getTalkBySlug; loading: boolean }
  ) => JSX.Element | null;
}

export const TalkController: React.SFC<Props> = props => (
  <Query<TalkQuery, TalkQueryVariables>
    query={query}
    variables={{
      slug: props.slug
    }}>
    {({ loading, data }) => {
      return props.children({ data: data.getTalkBySlug, loading });
    }}
  </Query>
);
