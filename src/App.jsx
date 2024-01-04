import React, { useState } from 'react';
import { Routes, Route, Navigate,Link } from 'react-router-dom';
import './App.css'
import "./styles/color.css";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";
import Home from "./Components/Home" 
import Mentorship from "./Pages/Mentorship" 
import CoursesDetails from "./Pages/components/CoursesDetails" 
import Courses from "./Pages/Courses" 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Mentorship' element={<Mentorship/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Course_Details' element={<CoursesDetails/>}/>
    </Routes>
      
    </>
  )
}

export default App
