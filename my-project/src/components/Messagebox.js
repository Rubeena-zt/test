import React from 'react'
import x from './public/images/x-removebg-preview (8).png'

const Messagebox = () => {
  return (
    <div className='bg-slate-800 py-6 mx-8 h-10 rounded text-white flex justify-between items-center px-4 border-l-8 border-yellow-400 mb-7'>
<div>
    <h5 className='text-bold'>3 Payments have not yet been posted</h5>
</div>
<div className='flex gap-4 text-sm items-center'>
    <h5>Preview Posting Results </h5>
    <h5 className='text-gray-400'>|</h5>
    <img className='w-3 h-3' src={x}/>
</div>
    </div>
  )
}

export default Messagebox