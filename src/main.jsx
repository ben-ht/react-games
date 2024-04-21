import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import "./main.css";

import JwtContextProvider from "./context/JwtContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JwtContextProvider>
      <Router />
    </JwtContextProvider>
  </React.StrictMode>
);
