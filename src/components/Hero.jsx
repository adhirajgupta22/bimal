import React from 'react'

const Hero = () => {
  return (
    <section className='max-w-7xl flex flex-col items-center justify-center pt-12 px-4 mx-auto'>
      <div className='flex flex-col items-center justify-center pt-8'>
        <h1 className='sm:text-6xl text-4xl font-extrabold tracking-tighter text-orange-950'>
          Bolo Zubaan <span className='text-orange-50'>Canceri</span>
        </h1>
        <p className='md:text-xl text-lg text-orange-950'>More You eats, sooner you dies</p>
      </div>

      <img 
        src="/ajay.png" 
        alt="ajay bhai ki photo" 
        width={500}
        height={500}
        className='w-80% md:40% h-full object-contain sticky flex items-center justify-center opacity-100 hover:opacity-80 hover:scale-105 animate-fadein duration-300 transition-all'
      />
      
    </section>
  )
}

export default Hero;