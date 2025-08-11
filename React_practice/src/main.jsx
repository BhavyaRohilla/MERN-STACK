import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Steps from "./Steps";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Steps />
  </StrictMode>
);
