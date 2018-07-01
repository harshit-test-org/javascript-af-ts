import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import "isomorphic-unfetch";

let apolloClient = null;

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    // @ts-ignore
    connectToDevTools: process.browser,
    // @ts-ignore
    ssrMode: !process.browser,
    link: new HttpLink({
      // Disables forceFetch on the server (so queries are only run once)
      uri: "http://localhost:8080/graphql", // Server URL (must be absolute)
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState?: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  // @ts-ignore
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
