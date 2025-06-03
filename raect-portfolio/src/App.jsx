import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HeaderComp from './Components/HeaderComp/Header'
import '../src/index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <HeaderComp />
        <Routes>
        </Routes>
    </>
  )
}

export default App
