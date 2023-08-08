import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [disable, setDisable] = useState(true);
  const [visible, setVisible] = useState(true);
  const removeVisible = ()=>{
    setVisible((prev)=>!prev);
  }
  const removeDisable= ()=>{
    setDisable(false);
  }

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime)=>prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    removeDisable();
    removeVisible();
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setTime(0);
    removeVisible();
    setIsRunning(false);
  };

  const formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="app">
         <div className = "stopwatch-card">
      <div className = "container">
      <h1>React Stopwatch</h1>
      <p data-testid="time" >{formatTime}</p>
      <div className = "buttons">
        {visible &&(
            <button data-testid="start" onClick={handleStart}>
              Start
            </button>
        )}
      {isRunning && (
        <button data-testid="pause" onClick={handlePause}>
          Pause
        </button>
      )}
      {!isRunning && time !== 0 && (
        <button data-testid="resume" onClick={handleResume}>
          Resume
        </button>
      )}
      { (
        <button data-testid="reset" onClick={handleReset} disabled={disable}>
            Reset
        </button>
      )}
        </div>
        </div>
      </div>
    </div>
   
  );
};

export default Stopwatch;