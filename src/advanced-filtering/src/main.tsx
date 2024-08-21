import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import fakeLogEntries from "./data/logs.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App logs={fakeLogEntries} />
  </StrictMode>
);
