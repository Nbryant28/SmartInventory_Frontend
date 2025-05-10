// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_7rua4Nipr", // ✅ This is correct
  client_id: "3bri1ceoomkh3u77gptuhjgh9m",
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "email openid phone",
};






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
