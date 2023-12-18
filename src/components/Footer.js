import { Box, Typography, Stack, Button } from '@mui/material';
import React from 'react';

import logo from "../assets/images/Logo-1.png"

const Footer = () => {

  return (
    <div>
      <Box mt="40px" bgcolor="#fff" width="100vw" >
        <Stack direction="row" gap="40px" alignItems="center" justifyContent="center" px="40px" pt="20px" >
          <img src={logo} alt='logo' width="200px" height="40px" />
          <Typography>
            Made by <a href='https://www.linkedin.com/in/rahul1209' target='_blank' > Rahul Kundu </a> as a Practice Project!
          </Typography>
        </Stack>
      </Box>
    </div>
  )
}

export default Footer;
