import React from 'react'

const Card = () => {
  return (
    <div className='group w-full h-full bg-orange-100  flex md:flex-row flex-col gap-12 p-6 rounded-2xl items-center justify-center'>
        <img 
            src="/vimal.png" 
            alt="vimal photo"
            width={250}
            height={200} 
            className='group-hover:-translate-y-1 transition-all duration-300 object-contain'
        />
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col text-orange-950'>
                <h3 className='md:text-2xl text-xl font-semibold tracking-tighter'>
                    <span className='text-orange-600'>bimal</span> Elaichi
                </h3>    
                <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quas.</p>
            </div>
    
            <div className='flex gap-2 items-center'>
                <button className='bg-orange-600 text-white p-2 px-4 rounded-lg hover:bg-orange-700 transition-all duration-300'>
                    Die Now
                </button>
                <button className='bg-orange-50 text-orange-950 rounded-lg p-2 px-4 hover:bg-orange-50/50 transition-all duration-300'>
                    Die Later
                </button>
            </div>
        </div>

    </div>
  )
}

export default Card