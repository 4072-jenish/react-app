import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/counter'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
     <Counter count={10} setCount={10} />
    </>
  )
}

export default App
