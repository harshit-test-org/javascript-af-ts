import * as React from "react";
import Layout from "../components/Layouts";
import RepositoryView from "../components/RepositoryView";

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
        <RepositoryView user={this.props.user} repo={this.props.repo} />
      </Layout>
    );
  }
}
