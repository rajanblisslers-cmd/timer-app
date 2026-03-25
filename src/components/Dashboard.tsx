import React, { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import ControlButtons from './ControlButtons';
import { startTimer, stopTimer, resetTimer, getCurrentElapsedTime } from '../utils/TimerLogic';

const Dashboard: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleStart = () => {
    if (!intervalId) {
      const id = startTimer((newTime) => setElapsedTime(newTime), 100); // Update every 100ms for smoother display
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      stopTimer(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    handleStop(); // Ensure timer is stopped before resetting
    resetTimer();
    setElapsedTime(0);
  };

  useEffect(() => {
    // Initialize with current elapsed time if there was one from a previous session (though not persistent for MVP)
    setElapsedTime(getCurrentElapsedTime());

    // Cleanup on unmount
    return () => {
      if (intervalId) {
        stopTimer(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TimerDisplay elapsedTime={elapsedTime} />
      <ControlButtons
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
};

export default Dashboard;
