import React from "react";
import { render } from "react-dom";

import DemoSmartApp from "./demo-smart-app";

import "./demo.styl";

const content = document.getElementById("content");

render(<DemoSmartApp/>, content);
