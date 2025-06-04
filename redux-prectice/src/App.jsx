import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComp from './Components/HomeComp'
import { Route, Routes } from 'react-router'
import AddAnime from './Components/AddAnime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/addAnime" element={<AddAnime />} />
          </Routes>
    </>
  )
}

export default App
