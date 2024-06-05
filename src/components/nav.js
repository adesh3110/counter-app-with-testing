import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaExchangeAlt } from "react-icons/fa";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gray-800 py-4 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <span className='text-white text-lg font-semibold ml-2'>
                Counter App
              </span>
            </div>

            <div className='hidden md:flex'>
              <Link
                to='/'
                className='mx-2 text-blue-500 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                <FaPlus className='mr-1' />
                Increment
              </Link>
              <Link
                to='/decrement'
                className='mx-2 text-red-500 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                <FaMinus className='mr-1' />
                Decrement
              </Link>
              <Link
                to='/both'
                className='mx-2 text-green-500 flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                <FaExchangeAlt className='mr-1' />
                Both
              </Link>
            </div>
          </div>

          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='text-gray-300 hover:text-white focus:outline-none focus:text-white'
              aria-label='Open Menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={isOpen ? " md:hidden" : "hidden md:hidden"}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              className='text-blue-500 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium'
            >
              <FaPlus className='mr-1' />
              Increment
            </Link>
            <Link
              to='/decrement'
              className='text-red-500 hover:text-red-700 block px-3 py-2 rounded-md text-base font-medium'
            >
              <FaMinus className='mr-1' />
              Decrement
            </Link>
            <Link
              to='/both'
              className='text-green-500 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium'
            >
              <FaExchangeAlt className='mr-1' />
              Both
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
