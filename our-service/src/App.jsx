import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavScrollExample from './Components/header-comp/header'
import Head from './Components/services-head/service-head'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavScrollExample/>
    <Head/>
    </>
  )
}

export default App
