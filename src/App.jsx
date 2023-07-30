import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { useEffect, useState } from 'react'
import Home from "./component/Home"
import Header from "./component/Header"
import Profile from "./component/Profile"
import Login from "./component/Login"
import Register from "./component/Register"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import { Context, server } from "./main"
import { useContext } from "react"

function App() {
  const{setuser,setisAuth,setLoading}=useContext(Context)



  useEffect(() => {
    setLoading(true)
   axios.get(`${server}/userid`,{
    withCredentials:true,
   }).then(res=>{
    setuser(res.data.user);
    setisAuth(true)
    setLoading(false)
   }).catch((error)=>{
    setuser({});
    setisAuth(false)
    setLoading(false)
   })
  
   
  }, [])
  
  return (

  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/profile" element={<Profile/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/register" element={<Register/>}  />
    </Routes>
    <Toaster/>




  </Router>
  )
}

export default App
