import { useState } from 'react'
import './App.css'
import  Profile from './components/user-profile';
import image1 from  './assets/user-1.png';
import image2 from  './assets/user-2.webp';
import image3 from  './assets/user-3.jpg';
import image4 from  './assets/user-4.webp';

function App() {

  return (
    <div>
     < Profile  image={image1}  name="John Doe" age={30} email="johndoe@example.com" phone="123-456-7890" />
     < Profile  image={image2}  name="jinwoo sung" age={25} email="jinwoo@example.com" phone="986532741850" />
     < Profile  image={image3}  name="peter parker" age={22} email="peter@example.com" phone="8756412365" />
     < Profile  image={image4}  name="robert daoury jr" age={45} email="daoury@example.com" phone="8466135455" />
    </div>
  )
}

export default App
