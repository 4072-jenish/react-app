import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router'
import OurService from './Components/ourService/oue-service'
import TestimonialPage from './Components/Testimonial/TestimonialPage'
import AboutUs from './Components/Aboutus/main-aboutus'
import Blog from  './Components/Blog/Blog.jsx'
import { Route } from "react-router";
import NavScrollExample from './Components/header-comp/Header.jsx'
import Footer from './Components/footer/footerComp';
import Cursor from './Components/curser-Comp/cursor'


function App() {

  return (
    <>
<Cursor/>
    <NavScrollExample/>
    <Routes>
      
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/our-service" element={<OurService/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Testimonial" element={<TestimonialPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
