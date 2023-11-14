import React from 'react'
import { useState } from 'react';

const Login = ({ isLoggedIn,setIsLoggedIn}) => {

    const [data,setData]=useState({username:"",password:""});
  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username"></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password"></input>
          </div>
          <button onClick={()=>(setIsLoggedIn(true))}>Login</button>
        </form>
      )}
    </div>
  );
};

export default Login