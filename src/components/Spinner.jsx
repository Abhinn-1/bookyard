import React from 'react';

const Spinner = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center z-50'>
      <div className='w-16 h-16 border-4 border-t-transparent border-sky-600 rounded-full animate-spin'></div>
      <p className='mt-4 text-lg text-gray-800 font-semibold text-center px-4'>
        Please be patient — server might take upto 50 seconds to wake up
      </p>
    </div>
  );
};

export default Spinner;
