import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import withApolloClient from "../apollo/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import { baseTheme } from "javascript-af-ui";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={baseTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
