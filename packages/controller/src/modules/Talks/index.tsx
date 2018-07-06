import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { TalksQuery, TalksQuery_getTalks } from "../../types";

const TalksQuery = gql`
  query TalksQuery {
    getTalks {
      speaker
      id
      iframe
      createdAt
      previewImage
      title
      slug
    }
  }
`;

interface Props {
  children: (
    data: { data: TalksQuery_getTalks[] | null; loading: boolean }
  ) => JSX.Element | null;
}

export const TalksController: React.SFC<Props> = props => (
  <Query<TalksQuery> query={TalksQuery}>
    {({ data, loading }) => {
      return props.children({ data: data.getTalks, loading });
    }}
  </Query>
);
