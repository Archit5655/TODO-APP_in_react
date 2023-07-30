import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { useState } from 'react'
import Home from "./component/Home"
import Header from "./component/Header"
import Profile from "./component/Profile"
import Login from "./component/Login"
import Register from "./component/Register"


function App() {

  return (

  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/profile" element={<Profile/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/register" element={<Register/>}  />
    </Routes>




  </Router>
  )
}

export default App
