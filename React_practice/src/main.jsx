import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Steps from "./Steps";
import Flashcards from "./Flashcards";
import NestedFaq from "./NestedFaq";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NestedFaq />
  </StrictMode>
);
