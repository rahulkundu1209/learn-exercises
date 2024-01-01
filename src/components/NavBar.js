import React, { useContext } from 'react';
import { NavLink, useLocation} from "react-router-dom";
import {Stack} from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { AuthContext } from '../store/auth-context';
import Logout from './Logout';

const NavBar = () => {
  const { authCtx } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;

  return (
    <Stack
      direction="row"
      justifyContent="none"
      sx={{gap:{sm: "122px", xs: "40px"}, mt: {sm: "32px", xs: "20px"}}}
      px="20px"
      zIndex="100"
    >
      <NavLink to={"/"}>
        <img 
        src={Logo} 
        alt="logo"
        style={{width: "48px", height: "48px", margin: "0px 20px"}} />
      </NavLink>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <NavLink 
          to={"/"}
          style={path === "/" ? {textDecoration: "none", color:"#3A1212", borderBottom: "3px solid #1D8348"} : {textDecoration: "none", color:"#3A1212"}}
          >
          Home
        </NavLink>
        <a
          href='#exercises'
          style={path === "/" && window.scrollY > 400 ? {textDecoration: "none", color:"#3A1212", borderBottom: "3px solid #1D8348"} : {textDecoration: "none", color:"#3A1212"}}
        >
          Exercises
        </a>
        {authCtx.isSignedIn && 
          <NavLink 
          to={"/bookmarks"}
          style={path === "/bookmarks" ? {textDecoration: "none", color:"#3A1212", borderBottom: "3px solid #1D8348"} : {textDecoration: "none", color:"#3A1212"}}
          >
            Bookmarks
          </NavLink>
        }
        {
          authCtx.isSignedIn === true ? <Logout/> : 
        
        (<NavLink 
          to={"/auth?mode=Signin"}
          style={path === "/auth" ? {textDecoration: "none", color:"#3A1212", borderBottom: "3px solid #1D8348"} : {textDecoration: "none", color:"#3A1212"}}
          >
          Signin
        </NavLink>)
        }
      </Stack>
    </Stack>
  );
};

export default NavBar;
