import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { CounterApp } from "./01-useState/CounterApp.jsx";
import { CounterWithCustomHook } from "./02-custom_hook_counter/CounterWithCustomHook.jsx";
import { FormWithCustomHook } from "./03-useEffect/FormWithCustomHook.jsx";
import { SimpleForm } from "./03-useEffect/SimpleForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <CounterApp />,
  <SimpleForm />,
  // </React.StrictMode>,
);
