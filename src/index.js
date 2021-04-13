import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RTL from "./layouts/RTL";
import ThemeMUI from "./layouts/ThemeMUI";

ReactDOM.render(
  <React.StrictMode>
    <ThemeMUI>
      <RTL>
        <App />
      </RTL>
    </ThemeMUI>
  </React.StrictMode>,
  document.getElementById("root")
);
