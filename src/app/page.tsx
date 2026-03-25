/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import TimerDisplay from '../components/TimerDisplay';
import StartStopButton from '../components/StartStopButton';
import ResetButton from '../components/ResetButton';

const Home: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0); // in milliseconds
  const startTimeRef = useRef<number | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const formatTime = (time: number): string => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const updateTimer = useCallback(() => {
    if (isRunning && startTimeRef.current !== null) {
      const now = Date.now();
      const newElapsedTime = now - startTimeRef.current;
      setElapsedTime(prevTime => prevTime + newElapsedTime);
      startTimeRef.current = now;
    }
    animationFrameIdRef.current = requestAnimationFrame(updateTimer);
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now();
      animationFrameIdRef.current = requestAnimationFrame(updateTimer);
    } else {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      startTimeRef.current = null; // Clear start time when stopped
    }
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isRunning, updateTimer]);

  const handleToggle = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setElapsedTime(0);
    startTimeRef.current = null;
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full flex flex-col items-center space-y-8">
        <TimerDisplay time={formatTime(elapsedTime)} />
        <div className="flex flex-col space-y-4 w-full">
          <StartStopButton isRunning={isRunning} onToggle={handleToggle} />
          <ResetButton onReset={handleReset} isResetDisabled={isRunning || elapsedTime === 0} />
        </div>
      </div>
    </div>
  );
};

export default Home;
