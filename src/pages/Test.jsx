import React from 'react';

const Test = () => {
  return (
    <div className="flex sm:flex-col md:flex-row justify-center md:justify-between">
      <div className="w-72 h-72 sm:bg-yellow-300 md:bg-green-400 lg:bg-orange-600"></div>
      <div className="w-72 h-72 bg-blue-500"></div>
      <div className="w-72 h-72 bg-red-600"></div>
    </div>
  );
};

export default Test;
