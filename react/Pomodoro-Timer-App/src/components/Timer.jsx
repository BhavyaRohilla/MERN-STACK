// components/Timer.js
import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Settings from "./Settings";

function Timer() {
  const [durations, setDurations] = useState({
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  });

  const [secondsLeft, setSecondsLeft] = useState(durations.pomodoro);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("pomodoro");

  useEffect(() => {
    setSecondsLeft(durations[mode]);
  }, [durations, mode]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 0) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (secs) => {
    const min = String(Math.floor(secs / 60)).padStart(2, "0");
    const sec = String(secs % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setIsActive(false);
    setSecondsLeft(durations[newMode]);
  };

  return (
    <div className="timer">
      <div className="mode-buttons">
        <button onClick={() => changeMode("pomodoro")}>Pomodoro</button>
        <button onClick={() => changeMode("short")}>Short Break</button>
        <button onClick={() => changeMode("long")}>Long Break</button>
      </div>

      <h2>{formatTime(secondsLeft)}</h2>

      <Controls
        isActive={isActive}
        onStartPause={() => setIsActive(!isActive)}
        onReset={() => {
          setIsActive(false);
          setSecondsLeft(durations[mode]);
        }}
      />

      <Settings setDurations={setDurations} />
    </div>
  );
}

export default Timer;
