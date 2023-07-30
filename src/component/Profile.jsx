import React, { useContext } from 'react'
import { Context } from '../main';
import Loader from './Loader';

const Profile = () => {
    const {isAuth, setisAuth,Loading,setLoading,user} = useContext(Context);

console.log(user)


  return (
    Loading? <Loader/>:    <div>
    <h1> NAME-   {user.name}</h1>
    <h3>  EMAIL-   {user.email}</h3>
  <h4>date of account creation -   {user.createdAt}</h4>
      </div>


  )
}

export default Profile
