import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { useContext } from "react";
import { Context, server } from "../main";
import axios from 'axios';


const Login = () => {
    const {isAuth, setisAuth,Loading,setLoading} = useContext(Context);


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const sumbithandler = async (e) => {
        e.preventDefault();
        setLoading(true)
    try {
       
        console.log( email, password);
        const {data} =await axios.post(`${server}/users/login`,{email,password},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        });
    
        // Toast is a library used to declare message like after success of registting 
        toast.success(data.message)
        setisAuth(true);
        setLoading(false)

    } catch (error) {
        toast.error(error.response.data.message)
        setisAuth(false);
    
    }
    };
    if(isAuth)  return <Navigate to={"/"}  />

  return (
    <div className='login'>
        <section>
            <form action="" onSubmit={sumbithandler}>
            <input
            required
              
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
                <button type='sumbit'  disabled={Loading}   >Login</button>
                <h4>Or</h4>
                <Link to="/register"> Sign up</Link>

            </form>
        </section>

    </div>
  )
}

export default Login
