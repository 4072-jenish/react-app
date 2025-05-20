import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HeaderComp from './Components/HeaderComp/Header'
import HomeComp from './Components/HomeComp/HomeComp'
import '../src/index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <HeaderComp />
        <Routes>
              <Route path='/'  element={<HomeComp/>}/>
        </Routes>
    </>
  )
}

export default App
