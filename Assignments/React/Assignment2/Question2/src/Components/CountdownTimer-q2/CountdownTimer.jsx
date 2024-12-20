import React from "react";
import { useState } from "react";
import "./CountdownTimer.css";

function CountdownTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (!isRunning && inputValue > 0) {
      setIsRunning(true);
      setSeconds(inputValue);
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
  };
  const handleChange = (e) => {
    setInputValue(Number(e.target.value));
    if(!isRunning){
      setSeconds(Number(e.target.value));
    }
  };

  return (
    <div id="container">
      <h1>Countdown Timer</h1>
      <h2>{seconds >= 0 ? seconds : "Time's Up!"}</h2>

      <input
        type="number"
        placeholder="e.g., 20"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={startTimer}>Start</button>
    </div>
  );
}

export default CountdownTimer;
