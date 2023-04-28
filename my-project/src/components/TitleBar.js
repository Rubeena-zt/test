import React from 'react'
import filter from './public/images/filter.png'

const TitleBar = () => {
  return (
    <div className='flex bg-slate-100 justify-between p-8'>
    <div className='text-4xl text-green-950 font-bold'>
Payments
    </div>
    <div className='flex gap-9 items-center'>
    <div className='bg-white py-2 px-4 text-sm border border-gray-300 flex items-center gap-2'><svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg><h5>
          Search by receipt, grave site, payor
          </h5></div>
    <div className='flex items-center rounded-full bg-gray-500 text-white px-4 gap-3 items-center'>
    <img className='w-4' src={filter} />
    <button className=' text-white py-1'>Filter</button>
    </div>
    <div>
    <button className='rounded-full bg-green-600 text-white px-4 py-1'>+Payment</button>
    </div>

    
        
    </div>
    </div>
  )
}

export default TitleBar