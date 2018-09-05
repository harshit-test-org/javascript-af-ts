import * as React from 'react';
import Layout from '../components/Layouts';
import { TalksView } from '../components/TalksView';

export default class Repository extends React.Component<{
  slug: string;
}> {
  static getInitialProps = ({ query }) => {
    return query;
  };
  render() {
    return (
      <Layout>
        <TalksView slug={this.props.slug} />
      </Layout>
    );
  }
}
