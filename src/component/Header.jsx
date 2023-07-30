import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast"
import { Context, server } from "../main";


const Header = () => {
    const {isAuth, setisAuth,Loading,setLoading} = useContext(Context);
    const Logoutthandler = async () => {
setLoading(true)
    try {

        await axios.post(`${server}/users/logout`,{
            withCredentials:true,
        });
    
        // Toast is a library used to declare message like after success of registting 
        toast.success("Logout Successfully")
        setisAuth(false);
        setLoading(false)
    } catch (error) {
        toast.error(error.response.data.message)
        setisAuth(true);
    
    }
    };
  console.log(isAuth);
  return (
    <nav className="header">
      <div>
        <h2>TODO-APP</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>

        {isAuth ? (
          <button className="btn" onClick={Logoutthandler} disabled={Loading}>Logout</button>
        ) : (
          <Link to={"/login"}>login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
