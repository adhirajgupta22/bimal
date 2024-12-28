import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-gradient-to-b from-yellow-400 via-orange-600 to-red-600 min-h-screen'>  
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </main>
  )
}

export default App