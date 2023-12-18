import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import {Stack} from "@mui/material";

import Logo from "../assets/images/Logo.png";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <Stack
      direction="row"
      justifyContent="none"
      sx={{gap:{sm: "122px", xs: "40px"}, mt: {sm: "32px", xs: "20px"}}}
      px="20px"
    >
      <NavLink to={"/"}>
        <img 
        src={Logo} 
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
          style={path === "/" ? {textDecoration: "none", color:"#3A1212"} : {textDecoration: "none", color:"#3A1212", borderBottom: "3px solid #1D8348"}}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
