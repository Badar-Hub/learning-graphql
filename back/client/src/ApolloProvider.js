import React from "react";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";

const link = new HttpLink({
  uri: "http://localhost:5000"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
