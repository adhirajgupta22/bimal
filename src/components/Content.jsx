import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <section className='bg-orange-50 flex flex-col items-center justify-center gap-10 py-12 px-4 rounded-2xl shadow-xl'>
      <div className='flex flex-col items-center justify-center gap-1  '>
        <h2 className='sm:text-4xl text-2xl font-extrabold tracking-tighter text-orange-950'>
          Cancerous Products
        </h2>
        <p className='md:text-xl text-lg text-orange-950 text-center max-w-lg'>
          Discover various cancerous products made specifically for you!
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default Content