import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router'
import OurService from './Components/ourService/oue-service'
import TestimonialPage from './Components/Testimonial/TestimonialPage'
import AboutUs from './Component/s'
import { Route } from "react-router";
import NavScrollExample from './Components/header-comp/header';
import Footer from './Components/footer/footerComp';
import Cursor from './Components/curser-Comp/cursor'


function App() {

  return (
    <>
<Cursor/>
    <NavScrollExample/>
    <Routes>
      
      <Route path="/" element={<OurService/>} />
      <Route path="/Testimonial" element={<TestimonialPage/>} />
      <Route path="/About-us" element={<AboutUs/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
