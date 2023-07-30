import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const sumbithandler = (e) => {
    e.preventDefault();
    console.log(name,email,password)
    axios.post()
  };
  return (
    <div className="login">
      <section>
        <form  onSubmit={sumbithandler}>
          <input required value={name} onChange={(e)=> setname(e.target.value)} type="text" placeholder="name" />
          <input  required value={email} onChange={(e)=> setemail(e.target.value)} type="email" placeholder="Email" />
          <input required value={password} onChange={(e)=> setpassword(e.target.value)} type="password" placeholder="Password" />
          <button type="sumbit">Login</button>
          <h4>Already a User</h4>
          <Link to="/login"> Login</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
