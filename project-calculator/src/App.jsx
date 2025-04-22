import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Key from './Components/key'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Key></Key>
    </>
  )
}

export default App
