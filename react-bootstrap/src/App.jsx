import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormExample from './Components/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormExample />
    </>
  )
}

export default App
