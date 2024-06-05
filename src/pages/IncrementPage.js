import React, { useState } from "react";

const IncrementPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl mb-4'>Increment Count</h1>
      <p className='text-2xl mb-4'>{count}</p>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default IncrementPage;
