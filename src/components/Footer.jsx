import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 py-4 px-4 '>
      <div className='flex flex-col items-center justify-center md:max-w-sm max-w-lg gap-2'>
        <Link to='/'>
          <h1 className='text-2xl text-orange-50 tracking-tighter font-extrabold hover:text-orange-300 transition-all duration-300'>bimal</h1>
        </Link> 
        <p className='text-center text-sm text-orange-50'>
          Bimal cannot be held accountable for any health issues, including
          cancer, that may arise from consumption.
        </p>
      </div> 

      <p className='text-sm text-orange-100'>
        &copy; {new Date().getFullYear()} Bolo Zubaan Canceri. All rights reserved.
      </p> 
    </footer>
  )
}

export default Footer