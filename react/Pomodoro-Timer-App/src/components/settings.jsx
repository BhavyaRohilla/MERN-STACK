// components/Settings.js
import React, { useState } from "react";

function Settings({ setDurations }) {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleSave = () => {
    setDurations({
      pomodoro: pomodoro * 60,
      short: shortBreak * 60,
      long: longBreak * 60,
    });
  };

  return (
    <div className="settings">
      <h3>⏱ Customize Durations (minutes)</h3>
      <label>Pomodoro:</label>
      <input
        type="number"
        value={pomodoro}
        onChange={(e) => setPomodoro(Number(e.target.value))}
      />
      <br />
      <label>Short Break:</label>
      <input
        type="number"
        value={shortBreak}
        onChange={(e) => setShortBreak(Number(e.target.value))}
      />
      <br />
      <label>Long Break:</label>
      <input
        type="number"
        value={longBreak}
        onChange={(e) => setLongBreak(Number(e.target.value))}
      />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Settings;
