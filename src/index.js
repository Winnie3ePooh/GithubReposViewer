import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import client from "api/client";

import MainPage from "containers/MainPage/MainPage";

ReactDOM.render(
  <HashRouter>
    <ApolloProvider client={client}>
      <MainPage />
    </ApolloProvider>
  </HashRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
