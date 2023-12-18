import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import topArrow from "../assets/images/up-arrow.png"

const NavigateTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const navigateTopHandler = () =>{
    window.scrollTo({top: "0", behavior: "smooth"})
  }

  window.addEventListener('scroll', () => {
    const updatedScrollPosition = window.scrollY;

    if(updatedScrollPosition > 200){
      setIsVisible(true);
    }
    else{
      setIsVisible(false);
    }
  });

  return (
    <Box
      className="up-arrow"
      display={isVisible ? "flex" : "none"}
      onClick={navigateTopHandler}
    >
      <img src={topArrow} height="20px" width="20px" />
    </Box>
  )
}

export default NavigateTop;
