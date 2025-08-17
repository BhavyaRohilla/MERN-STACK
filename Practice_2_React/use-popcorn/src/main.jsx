import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./Component/StarRating";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      defaultRating={3}
      size={40}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      onSetRating={(r) => console.log("New Rating:", r)}
    />
  </StrictMode>
);
