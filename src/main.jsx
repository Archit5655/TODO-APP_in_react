import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import {createContext} from "react"


export const server="https://nodejs-todoapp-ia88.onrender.com"

export const Context=createContext({isAuth:false})

const Appwrapper=()=>{
const [isAuth, setisAuth] = useState(false)
const [Loading, setLoading] = useState(false)
const [user, setuser] = useState({})
  return(
    <Context.Provider value={{isAuth,setisAuth,Loading, setLoading,user, setuser}}>
    <App />

    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
<Appwrapper />
  </React.StrictMode>,
)
