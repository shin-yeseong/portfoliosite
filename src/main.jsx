import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// fullPage.js CSS (필수)
import "fullpage.js/dist/fullpage.min.css";
// Tailwind + 전역 스타일
import "./index.css";

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
