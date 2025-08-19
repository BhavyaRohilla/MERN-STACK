// components/Controls.js
import React from "react";

function Controls({ isActive, onStartPause, onReset }) {
  return (
    <div className="controls">
      <button onClick={onStartPause}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Controls;
