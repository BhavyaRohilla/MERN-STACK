import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("June 21, 2027");
  date.setDate(date.getDate() + count);

  function handleRange(e) {
    setRange(+e.target.value);
  }

  function handlePrev() {
    setCount(count - range);
  }

  function handleNext() {
    setCount(count + range);
  }

  function handleReset() {
    setCount(0);
    setRange(1);
  }

  return (
    <div className="app">
      <h1>📅 Date Calculator</h1>

      <div className="range-section">
        <label>Day Range: {range}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={range}
          onChange={handleRange}
        />
      </div>

      <div className="control-section">
        <button onClick={handlePrev}>➖</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleNext}>➕</button>
      </div>

      <p className="output">
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} day${count > 1 ? "s" : ""} from today is`
          : `${Math.abs(count)} day${
              Math.abs(count) > 1 ? "s" : ""
            } ago was`}{" "}
        <strong>{date.toDateString()}</strong>
      </p>

      {(count !== 0 || range !== 1) && (
        <button className="reset-button" onClick={handleReset}>
          🔁 Reset
        </button>
      )}
    </div>
  );
};

export default App;
