import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "javascript-af-ui";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={baseTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
