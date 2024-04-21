import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import "./main.css";

import JwtContextProvider from "./context/JwtContext";
import UserContextProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JwtContextProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </JwtContextProvider>
  </React.StrictMode>
);
