import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavigateTop from '../components/NavigateTop';

const RootLayout = () => {

  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <NavigateTop/>
      <Footer/>
    </>
  )
}

export default RootLayout;
