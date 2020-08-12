import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./app.css";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
   
    <button  className="button2"  onClick={() => logout()}>
    Log out
  </button>
    
  )
}

export default LogoutButton