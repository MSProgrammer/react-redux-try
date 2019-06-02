import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";
import App from "components/app";

export default props => {
  return (
    <Provider store={createStore(reducers, {})}>
      <App />
    </Provider>
  );
};
