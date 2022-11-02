import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { HeroProvider } from "./context/HeroContext";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HeroProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
