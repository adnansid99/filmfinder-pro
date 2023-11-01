import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./component/App.jsx";
import "./index.css";
import { AppPrivider } from "./component/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppPrivider>
        <App />
      </AppPrivider>
    </Router>
  </React.StrictMode>,
);
