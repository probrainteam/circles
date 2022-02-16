import React from "react";
import ReactDOM from "react-dom";
import App from "components/app/App";
import { store } from "components/app/store";
import { Provider } from "react-redux";
import axios from "axios";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// axios.defaults.baseURL = "http://121.183.241.121:5678/api";
axios.defaults.withCredentials = true;
