import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='sticky top-0 right-0 z-50 flex justify-between items-center px-4 py-4 mx-auto max-w-7xl'>
        <Link to="/">
            <h1 className='text-2xl font-extrabold text-orange-600 tracking-tighter'>
                bimal
            </h1>
        </Link>
        
        <div className='flex items-center gap-4'>
            <Link to="#products" className='text-orange-950 hover:text-orange-900 transition-all duration-300 font-medium tracking-tight'>
                Products
            </Link>
            <button className='text-white font-medium bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300'>
                Login
            </button>
        </div>
    </nav>
  )
}

export default Navbar