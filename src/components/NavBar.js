import React, { useContext, useState } from 'react';
import { NavLink, useLocation} from "react-router-dom";
import {IconButton, Stack} from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { AuthContext } from '../store/auth-context';
import Logout from './Logout';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const { authCtx } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  const [displayMenu, setDisplayMenu] = useState(false);

  const displayMenuHandler = () =>{
    setDisplayMenu(!displayMenu);
  }

  return (
    <Stack
      direction="row"
      justifyContent= "normal"
      sx={{
        gap:{sm: "122px", xs: "40px"}, 
        mt: {sm: "32px", xs: "20px"},
        justifyContent: {xs: "space-between", sm: "normal", xl: "normal"},
      }}
      px="20px"
      zIndex="100"
    >
      <NavLink to={"/"}>
        <img 
        src={Logo} 
        alt="logo"
        style={{width: "60px", height: "48px", margin: "0px 20px"}} />
      </NavLink>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        sx={{
          display: !displayMenu ? {xs: "none", sm: "flex", xl: "flex"} : {xs: "flex", sm: "flex", xl: "flex"},
          flexDirection: {xs: "column", sm: "row", xl: "row"},
          position: {xs: "absolute", sm: "relative"},
          alignItems: {xs: "center", sm: "flex-end"},
          bgcolor: {xs: "#fff", sm: "inherit"},
          width: {xs: "250px", sm: "inherit"},
          right: {xs: "0", sm: "inherit"},
          top: {xs: "0", sm: "inherit"},
          paddingTop: {xs: "50px", sm: "inherit"},
          paddingBottom: {xs: "10px", sm: "inherit"},
          borderBottomLeftRadius: "20px"
        }}
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
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ 
          mr: 2,
          display: {sm: "none", xl: "none"},
          right: "0",
          position: "absolute",
        }}
        onClick={displayMenuHandler}
      >
        <MenuIcon/>
      </IconButton>
    </Stack>
  );
};

export default NavBar;
