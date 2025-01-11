import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { CounterApp } from "./useState/CounterApp.jsx";
import { CounterWithCustomHook } from "./custom_hook_counter/CounterWithCustomHook.jsx";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook.jsx";
import { SimpleForm } from "./useEffect/SimpleForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CounterApp />,
  <CounterWithCustomHook />,
  <SimpleForm />,
  // </React.StrictMode>,
);
