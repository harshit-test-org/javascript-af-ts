import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import withApolloClient from "../apollo/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import { baseTheme } from "javascript-af-ui";

// Including fonts here
import "typeface-fira-sans";
import "typeface-fira-mono";
import "normalize.css";

class MyApp extends App<{ apolloClient?: any }> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <ThemeProvider theme={baseTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
