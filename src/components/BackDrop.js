import { Box } from '@mui/material'
import React from 'react'

const BackDrop = (props) => {
  return (
    <Box
      height="100%"
      width="100%"
      position= "fixed"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: "rgb(0, 0, 0, 0.2)"
      }}
    >
      {props.children}
    </Box>
  )
}

export default BackDrop
