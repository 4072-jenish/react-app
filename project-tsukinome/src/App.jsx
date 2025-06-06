import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import AddAnime from '../src/Components/AddAnime'
import Home from '../src/Components/Home'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/AddAnime' element={<AddAnime/>}/> 
         </Routes>
    </>
  )
}

export default App
