import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
  isResetDisabled: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset, isResetDisabled }) => {
  return (
    <button
      onClick={onReset}
      disabled={isResetDisabled}
      className={`w-full py-3 text-white font-semibold rounded-lg text-base transition duration-200 ease-in-out
      ${isResetDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2'}
      `}
    >
      Reset
    </button>
  );
};

export default ResetButton;
