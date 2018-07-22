import React from "react";
import initApollo from "./init-apollo";
import Head from "next/head";
import { getDataFromTree } from "react-apollo";

interface Process {
  browser: boolean;
}
declare const process: Process;

export default App => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";
    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const apolloState: { data?: any } = {};
      const apollo = !process.browser
        ? initApollo(null, ctx.ctx.req.headers.cookie)
        : initApollo();
      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      try {
        // Run all GraphQL queries
        await getDataFromTree(
          <App
            {...appProps}
            Component={Component}
            router={router}
            apolloState={apolloState}
            apolloClient={apollo}
          />
        );
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        // tslint:disable-next-line:no-console
        console.error("Error while running `getDataFromTree`dd", error);
      }

      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      apolloState.data = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }
    apolloClient: any;
    constructor(props) {
      super(props);
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient =
        props.apolloClient || initApollo(props.apolloState.data);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
