import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HeaderComp from './Components/HeaderComp/Header'
import '../src/index.css';
import HomeComp from './Components/HomeComp/HomeComp';
import AboutComp from './Components/AboutComp/AboutComp';
import Footer from './Components/Footer/FooterComp';
import Skills from './Components/Skills/SkillCom';
import Projects from './Components/Projects/Projectcomp';
import ContactComp from './Components/ContactComp/ContactComp';
import CustomCursor from './Components/Cursor/Cursor';
import Faq from './Components/FAQComp/FAQComp';

function App() {

  return (
    <>
    <CustomCursor/>
    
     <HeaderComp />
        <Routes>
          <Route path='/'  element={<HomeComp/>}/>
          <Route path='/aboutComp'  element={<AboutComp/>}/>
          <Route path='/skills'  element={<Skills/>}/>
          <Route path='/projectComp'  element={<Projects/>}/>
          <Route path='/faq'  element={<Faq/>}/>
          <Route path='/contactUs'  element={<ContactComp/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
