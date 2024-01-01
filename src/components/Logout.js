import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../store/auth-context';

const Logout = () => {
  const navigate = useNavigate();
  const { setAuthCtx } = useContext(AuthContext);

  const logoutHandler = () =>{
    if(localStorage.getItem("userId") || localStorage.getItem("displayName")){
      localStorage.removeItem("userId");
      localStorage.removeItem("displayName");
      setAuthCtx({
        isSignedIn: false,
        userId: localStorage.getItem("userId"),
        displayName: localStorage.getItem("displayName"),
      })
      
      navigate("/");
    }

    return;
  }

  return (
    <Box>
      <button className='auth-button' onClick={logoutHandler}>Logout</button>
    </Box>
  )
}

export default Logout;
