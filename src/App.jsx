import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Product from './Components/Product'
import Category from './Components/Category'
import Innovations from './Components/Innovations'
import Forward from './Components/Forward'
import Community from './Components/Community'
import Footer from './Components/Footer'
import CarSellingLanding from './Components/CarSellingLanding'
import WhyChoose from './Components/WhyChoose'
import Backtotop from './Components/Backtotop'
import Testimonialcard from './Components/Testimonialcard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Backtotop/>
    <Hero/>
    <Product/>
    <Category/>
    <Innovations/>
     <WhyChoose/>
    <Community/>
    <Forward/>
    <Testimonialcard/>
  <CarSellingLanding/>
    <Footer/>
    </>
  )
}

export default App
