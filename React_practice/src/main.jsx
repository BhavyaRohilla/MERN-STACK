import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import Steps from "./Steps";
import Flashcards from "./Flashcards";
import NestedFaq from "./NestedFaq";
import EmployeeManagement from "./EmployeeManagement";
import FarAway from "./FarAway";
import Acc from "./Acc";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Acc />
  </StrictMode>
);
