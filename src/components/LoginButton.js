import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./app.css";
const LoginButton = () => {
  const { loginWithRedirect, /* isAuthenticated */ } = useAuth0();

  return (
   
       <button className="button" onClick={() => loginWithRedirect()}>
        Log In
      </button> 
     /*  <button class="button" onclick="loginWithRedirect()">Log in</button>
     */
  )
}

export default LoginButton