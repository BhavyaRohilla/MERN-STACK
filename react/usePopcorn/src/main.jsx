import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Stars from "./Stars";
// import './index.css'
// import App from './App.jsx'

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <Stars color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} Stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Stars maxRating={10} />
    <Stars
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Stars size={24} color="red" className="test" defaultRating={3} />
    <Test />
  </StrictMode>
);
