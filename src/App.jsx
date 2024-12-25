import { useState } from 'react'
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';

import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login'

function App() {


  return (
  <Router>
  <Navbar/>

  <Routes>
   <Route  path='/' element={<Home/>}/>
   <Route  path='/signup' element={<SignUp/>}/>
   <Route path='/login' element={<Login/>} />
   
   </Routes>
   <Footer/>
   <ToastContainer/>
   </Router>
  )
}

export default App
