import React from 'react';
import { Button, Stack, Typography } from "@mui/material";

import bodyPartImage from "../assets/icons/body-part.png";
import equipmentImage from "../assets/icons/equipment.png";
import targetImage from "../assets/icons/target.png";

const Detail = ({exerciseDetail}) => {
  const { bodyPart, equipment, gifUrl, instructions, name, secondaryMuscles, target } = exerciseDetail;

  const extraDeail = [
    {
      icon: bodyPartImage,
      name: bodyPart
    },
    {
      icon: equipmentImage,
      name: equipment
    },
    {
      icon: targetImage,
      name: target
    },
  ]

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: {lg: "row"},
        p: "20px",
        alignItems: "center"
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className="detail-image" />
      <Stack
        sx={{
          gap: {lg: "35px", xs: "20px"}
        }}
      >
        <Typography variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {" "} is one of the best exercises to target your {target}. It will help you to improve your mood and gain energy.
        </Typography>
        {extraDeail.map((item) =>(
          <Stack key={item.name} direction="row" alignItems="center" gap="12px" >
            <Button
              sx={{ background: "#fff2db", borderRadius: "50%", height: "60px", width: "60px" }}
            >
              <img src={item.icon} height="25px" width="25px"  />
            </Button>
            <Typography variant='h6' textTransform="capitalize" >
              {item.name}
            </Typography>
          </Stack>
        ))}
        <Typography variant="h5">
          Instructions
        </Typography>
        <ol>
          {instructions?.map((instruction, index) =>(
            <li key={index} >{instruction}</li>
          ))}
        </ol>
      </Stack>
    </Stack>
  )
}

export default Detail
