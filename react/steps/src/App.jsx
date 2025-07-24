import React, { useState } from "react";
import Challenge from "./challenge";

const STEPS = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const totalSteps = STEPS.length;

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < totalSteps) setStep((s) => s + 1);
  };

  const toggleSteps = () => setIsOpen((prev) => !prev);

  return (
    <div className="app">
      <button className="close-btn" onClick={toggleSteps}>
        &times;
      </button>
      <Challenge />
      {isOpen && (
        <div className="steps-container">
          <div className="step-indicators">
            {STEPS.map((_, index) => (
              <div
                key={index}
                className={`step-number ${step >= index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <p className="step-message">
            Step {step}: {STEPS[step - 1]}
          </p>

          <div className="step-buttons">
            <button
              className="nav-btn"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </button>

            <button
              className="nav-btn"
              onClick={handleNext}
              disabled={step === totalSteps}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
