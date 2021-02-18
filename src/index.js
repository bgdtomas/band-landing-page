import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js"
import "../src/components/styles/banner.css";
import "../src/components/styles/landingPage.css";
import "../src/components/styles/bandInfo.css";
import "../src/components/styles/membersInfo.css";

const container = document.getElementById("root");

ReactDOM.render(<App />, container);
