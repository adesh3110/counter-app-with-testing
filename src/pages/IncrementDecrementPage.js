import React, { useState } from "react";

const IncrementDecrementPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl mb-4'>Increment and Decrement Count</h1>
      <p
        className='text-2xl mb-4'
        style={{
          color: count > 0 ? "black" : "red",
        }}
      >
        {count}
      </p>
      <div className='flex space-x-4'>
        <button
          name='increase'
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          name='decrease'
          className='bg-red-500 text-white px-4 py-2 rounded'
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrementPage;
