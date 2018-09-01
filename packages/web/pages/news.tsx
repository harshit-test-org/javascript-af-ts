import * as React from 'react';
import Layout from '../components/Layouts';
import { NewsView } from '../components/NewsView';

export default class Repository extends React.Component<{
  slug: string;
}> {
  static getInitialProps = ({ query }) => {
    return query;
  };
  render() {
    return (
      <Layout>
        <NewsView slug={this.props.slug} />
      </Layout>
    );
  }
}
