import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import CardContainer from './components/CardContainer';
import OurProducts from './components/OurProducts';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';

function App() {


  return (
  <>
    <Navbar/>
    <HeroSection/>
    <CardContainer/>
    <OurProducts/>
    <CustomerReview/>
    <Footer/>
  </>
  )
}

export default App
