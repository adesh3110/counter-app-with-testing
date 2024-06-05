import React, { useState } from "react";

const DecrementPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl mb-4'>Decrement Count</h1>
      <p className='text-2xl mb-4'>{count}</p>
      <button
        className='bg-red-500 text-white px-4 py-2 rounded'
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default DecrementPage;
