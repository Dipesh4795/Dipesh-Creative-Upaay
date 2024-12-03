import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";

const store = configureStore({
  reducer: rootReducer,
});
// console.log("jdnf", process.env.REACT_APP_LOGIN_REDIRECT_URI);

let redirectUri =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOGIN_REDIRECT_URI
    : process.env.REACT_APP_LOGIN_REDIRECT_URI_PROD;

console.log("jdnf", redirectUri);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-cvo2ov8l4cdq6mn4.us.auth0.com"
        clientId="Ckn3nSOXn3uJrFKLxOQ3Lan4xOeIRRke"
        authorizationParams={{
          redirect_uri: redirectUri,
        }}
      >
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
