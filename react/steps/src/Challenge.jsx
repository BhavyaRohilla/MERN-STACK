import React, { useState } from "react";
import "./Challenge.css";

const Challenge = () => {
  return (
    <div className="challenge-container">
      <h2>🧮 Date Counter Challenge</h2>
      <Counter />
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const baseDate = new Date("June 21, 2027");
  baseDate.setDate(baseDate.getDate() + count);

  const handleStepDecrease = () => setStep((prev) => prev - 1);
  const handleStepIncrease = () => setStep((prev) => prev + 1);
  const handleCountDecrease = () => setCount((prev) => prev - step);
  const handleCountIncrease = () => setCount((prev) => prev + step);

  const dateMessage =
    count === 0
      ? "Today is"
      : count > 0
      ? `${count} days from today is`
      : `${Math.abs(count)} days ago was`;

  return (
    <div className="counter-container">
      <div className="section">
        <h3>Adjust Step</h3>
        <div className="control">
          <button onClick={handleStepDecrease}>-</button>
          <span>Step: {step}</span>
          <button onClick={handleStepIncrease}>+</button>
        </div>
      </div>

      <div className="section">
        <h3>Adjust Count</h3>
        <div className="control">
          <button onClick={handleCountDecrease}>-</button>
          <span>Count: {count}</span>
          <button onClick={handleCountIncrease}>+</button>
        </div>
      </div>

      <p className="date-output">
        <strong>{dateMessage}</strong> {baseDate.toDateString()}
      </p>
    </div>
  );
}

export default Challenge;
