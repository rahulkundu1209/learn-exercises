import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart}) => {

  return (
    <Stack
      type="button"
      justifyContent="center"
      alignItems="center"
      className='bodyPart-card'
      sx={{
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        borderTop: bodyPart===item ? "4px solid #1D8348" : "",
      }}  
      onClick={()=>{
        setBodyPart(item);
        window.scrollTo({ top: "1800", left: "100", behavior: "smooth" })
      }}
    >
      <img 
        src={Icon} 
        alt='gym' 
        style={{width: "40px", height: "40px"}}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >{item}</Typography>
    </Stack>
  )
}

export default BodyPart
