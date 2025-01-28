import * as React from "react";
import { createRoot } from "react-dom/client";

import { textA } from "./utils";
import Card from "./card";
import Body from "./body";

import "./main.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>It works {textA()}</h1>
    <Card />
    <Body />
  </React.StrictMode>
);
