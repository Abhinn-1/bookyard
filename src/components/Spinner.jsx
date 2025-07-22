import React from 'react';

const Spinner = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50'>
      <div className='w-16 h-16 rounded-full bg-sky-600 animate-ping'></div>
    </div>
  );
};

export default Spinner;
