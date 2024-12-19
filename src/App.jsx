import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import CardContainer from './components/CardContainer';

function App() {


  return (
  <>
    <Navbar/>
    <HeroSection/>
    <CardContainer/>
  </>
  )
}

export default App
