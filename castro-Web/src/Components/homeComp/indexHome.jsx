import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap" rel="stylesheet"></link>


function IndexHome() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Home />
        </>
    )
}

export default IndexHome;