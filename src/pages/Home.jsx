import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CardContainer from '../components/CardContainer'
import OurProducts from '../components/OurProducts'
import CustomerReview from '../components/CustomerReview'
import Footer from '../components/Footer'
const Home = () => {
  return (
   <>
     
    <HeroSection/>
    <CardContainer/>
    <OurProducts/>
    <CustomerReview/>
    
   </>
  )
}

export default Home