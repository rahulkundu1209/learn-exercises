import { Stack, Typography, Box } from '@mui/material';
import React from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';

const SimilarExercises = ({similarEquipmentExercises, similarTargetMuscelExercises, equipment, target}) => {
  // console.log(similarTargetMuscelExercises)
  return (
    <Stack 
      sx={{
        mt: {lg: "100px", xs: "0px"},
        gap: "100px"
      }}
    >
        <Box 
          sx={{ position: "relative", width: "100%", p: "20px"}}
        >
          <Typography variant='h3' mb="33px" >
            Similar <span style={{color: "#1D8348", textTransform: "capitalize"}} > {target} </span>exercises
          </Typography>
          <HorizontalScrollBar data={similarTargetMuscelExercises} exercises={true} />
        </Box>

        <Box 
          sx={{ position: "relative", width: "100%", p: "20px"}}
        >
          <Typography variant='h3' mb="33px" >
            Similar <span style={{color: "#1D8348", textTransform: "capitalize"}} > {equipment} </span>exercises
          </Typography>
          <HorizontalScrollBar data={similarEquipmentExercises} exercises={true} />
        </Box>
    </Stack>
  )
}

export default SimilarExercises
