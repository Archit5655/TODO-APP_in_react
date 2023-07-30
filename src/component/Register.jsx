import React, { useState } from "react";
import { Await, Link,Navigate } from "react-router-dom";
import axios from "axios";
import {server} from "../main";
import toast from "react-hot-toast"
import { useContext } from "react";
import { Context } from "../main";

const Register =  () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {isAuth, setisAuth,Loading,setLoading} = useContext(Context);


  const sumbithandler = async (e) => {
    e.preventDefault();
    setLoading(true);
try {
    console.log(name, email, password);
    const {data} =await axios.post(`${server}/users/new`,{name,email,password},{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true,
    });

    // Toast is a library used to declare message like after success of registting 
    toast.success(data.message)
    setisAuth(true);
    setLoading(false);

} catch (error) {
    toast.error("some error occured")
    console.log("error")
    setisAuth(false);

}
};
if(isAuth)  return <Navigate to={"/"}  />

  return (
    <div className="login">
      <section>
        <form onSubmit={sumbithandler}>
          <input
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="name"
          />
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
          <button type="sumbit" disabled={Loading}>Register</button>
          <h4>Already a User</h4>
          <Link to="/login"> Login</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
