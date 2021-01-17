// React
import React from "react";
import ReactDOM from "react-dom";
// Styles Componentes
import { CssBaseline } from "@material-ui/core";
// App
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
