import * as React from 'react';
import Layout from '../components/Layouts';
import { RepositoryDisplayView } from '../components/RepositoryDisplayView';

export default class RepoPage extends React.Component {
  render() {
    return (
      <Layout>
        <RepositoryDisplayView />
      </Layout>
    );
  }
}
