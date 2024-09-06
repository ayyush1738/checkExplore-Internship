import { useState } from 'react'
import Navbar from './components/Navbar'
import  Hero from './components/Hero'
import './components/About'
import About from './components/About'
import Footer from './components/Footer'
import OtherServices from './components/Others'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OtherServices />
      <Footer/>
    </div>
  )
}

export default App
