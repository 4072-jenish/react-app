import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import HomeComp from './Components/HomeComp'
import AddRecipe from './Components/AddRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
           <Route path='/'  element={<HomeComp/>}/>
           <Route path='/addRecipe'  element={<AddRecipe/>}/>
        </Routes>
    </>
  )
}

export default App
