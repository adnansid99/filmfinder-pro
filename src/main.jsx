import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";
import { AppPrivider } from "./components/Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppPrivider>
        <App />
      </AppPrivider>
    </Router>
  </React.StrictMode>,
);
