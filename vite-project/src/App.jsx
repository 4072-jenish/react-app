import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormValidation from './components/form-validation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <p>hellow World</p>
       <FormValidation/>
    </div>
  )
}

  

export default App
