import React from 'react';
import useTimer from '../../hook/useTimer';
import { formatTime } from '../../utils';

const Stopwatch = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className='stopwatch-card'>
        <p data-testid="time">{formatTime(timer)}</p> 
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart} data-testid="start">Start</button>
              : (
                isPaused ? <button onClick={handlePause} data-testid="pause">Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive} data-testid="reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
