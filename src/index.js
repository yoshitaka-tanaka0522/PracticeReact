import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//Appをコンポーネントとしてroot要素があるdomに対してレンダリングする
ReactDom.render(<App />, document.getElementById("root"));
