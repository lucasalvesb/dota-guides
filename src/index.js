import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { HeroProvider } from "./context/HeroContext";

ReactDOM.render(
  <React.StrictMode>
    <HeroProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HeroProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
