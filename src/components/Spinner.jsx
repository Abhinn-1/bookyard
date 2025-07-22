// SpinnerDark.jsx
import React from 'react';

const SpinnerDark = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-50"></div>
      <p className="ml-4 text-white text-lg">Loading... please be patient</p>
    </div>
  );
};

export default SpinnerDark;
