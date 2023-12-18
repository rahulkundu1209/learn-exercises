import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" }
      }}
    >
      <Typography
        color="#1D8348"
        fontWeight="600"
        fontSize="26px"
        mb={4}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="600"
        sx={{ fontSize: {lg: "44px", xs: "40px"}}}
        mb={3}
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography 
        fontSize="22px"
        lineHeight="35px"
        mb="24px"
      >
        Checkout the most effective exercises!
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{
          bgcolor: "#1D8348",
          padding: "10px"
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#1D8348"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" }
        }}
      >
        Exercises
      </Typography>
      <img 
        src={HeroBannerImage} 
        alt='banner' 
        className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
