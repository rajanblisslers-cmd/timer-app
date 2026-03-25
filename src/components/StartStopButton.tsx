import React from 'react';

interface StartStopButtonProps {
  isRunning: boolean;
  onToggle: () => void;
}

const StartStopButton: React.FC<StartStopButtonProps> = ({ isRunning, onToggle }) => {
  const buttonClass = isRunning
    ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
    : 'bg-green-600 hover:bg-green-700 focus:ring-green-500';

  return (
    <button
      onClick={onToggle}
      className={`w-full py-4 text-white font-bold rounded-lg text-lg transition duration-200 ease-in-out
      shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonClass}`}
    >
      {isRunning ? 'Stop' : 'Start'}
    </button>
  );
};

export default StartStopButton;
