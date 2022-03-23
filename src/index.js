import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
