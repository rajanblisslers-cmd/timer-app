import React from 'react';

interface TimerDisplayProps {
  time: string;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  return (
    <div className="text-center">
      <p className="font-mono text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 tracking-tight leading-none">
        {time}
      </p>
    </div>
  );
);

export default TimerDisplay;
