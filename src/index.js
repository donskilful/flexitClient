import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./authContext/AuthContext";
import { AlertContextProvider } from "./authContext/AlertContext";
import { PostContextProvider } from "./context/PostContext/PostContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AlertContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </AlertContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
