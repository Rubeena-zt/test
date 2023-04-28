import React from 'react'

function Footer() {
  return (
    <footer className='footer1 flex justify-between bg-gray-500 py-4 text-white px-5'>
    <p className='text-bold text-sm pl-4'>&copy;2023 Company</p>
    <div className='flex gap-5 text-sm'>
    <p>About</p>
    <p>Terms of Use</p>
    <p>Contact</p>
    </div>
   
  </footer>
  )
}

export default Footer