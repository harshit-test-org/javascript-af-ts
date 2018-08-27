import * as React from 'react';
import Layout from '../components/Layouts';
import { TalksView } from '../components/TalksView';

export default class Repository extends React.Component<{
  user: string;
  repo: string;
}> {
  static getInitialProps = ({ query }) => {
    return query;
  };
  render() {
    return (
      <Layout>
        <TalksView />
      </Layout>
    );
  }
}
