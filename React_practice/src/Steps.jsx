import React, { useState } from "react";
import "./steps.css";

const Steps = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));

  const handleToggle = () => setIsOpen((prev) => !prev);
  if (!isOpen) {
    return (
      <button className="reopen-btn" onClick={handleToggle}>
        Show Steps
      </button>
    );
  }

  return (
    <>
      <div className="steps">
        <button className="close" onClick={handleToggle}>
          &times;
        </button>
        <StepIndicator steps={steps} currentStep={currentStep} />
        <StepMessage message={steps[currentStep]} steps={currentStep + 1} />
        <NavigationButtons
          onPrev={handlePrev}
          onNext={handleNext}
          isFirst={currentStep === 0}
          isLast={currentStep === steps.length - 1}
        />
      </div>
    </>
  );
};

// step number component
function StepIndicator({ steps, currentStep }) {
  return (
    <div className="numbers" role="list">
      {steps.map((_, i) => (
        <div
          key={i}
          className={currentStep === i ? "active" : ""}
          role="listitem"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

// Step Message Components
function StepMessage({ message, steps }) {
  return (
    <div className="message">
      Steps {steps}:{message}
    </div>
  );
}

// Navigation Button Components
function NavigationButtons({ onPrev, onNext, isFirst, isLast }) {
  return (
    <div className="buttons">
      <button className="btn" onClick={onPrev} disabled={isFirst}>
        Previous
      </button>
      <button className="btn" onClick={onNext} disabled={isLast}>
        Next
      </button>
    </div>
  );
}

// App component
function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return <Steps steps={messages} />;
}

export default App;
