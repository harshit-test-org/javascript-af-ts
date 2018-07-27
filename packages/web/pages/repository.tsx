import * as React from "react";
import Layout from "../components/Layouts";

export default class Repository extends React.Component {
  static getInitialProps = ({ query }) => {
    return query;
  };
  render() {
    return (
      <Layout>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </Layout>
    );
  }
}
