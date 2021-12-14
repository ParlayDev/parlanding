import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./utils/reducers";

import "./assets/scss/style.scss";
import dotenv from "dotenv";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

dotenv.config();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const apollo_client = new ApolloClient({
  uri: process.env.REACT_APP_GCMS_URL,
});

const history = createBrowserHistory();
const options = {
  position: positions.MIDDLE,
};
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <AlertProvider template={AlertMUITemplate} {...options}>
        <ApolloProvider client={apollo_client}>
          <App />
        </ApolloProvider>
      </AlertProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
