import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";
import App from "components/app";
import reduxPromis from "redux-promise";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromis)
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
