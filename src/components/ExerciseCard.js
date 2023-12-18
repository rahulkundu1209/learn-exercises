import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({exercise, index}) => {
  const naviagte = useNavigate();

  const clickHandler = () =>{
    naviagte(`/exercise/${exercise.id}`);
    window.scrollTo({ top: "0", behavior: "instant" });
  }

  return (
    <Link
      className="exercise-card"
      // to={`/exercise/${exercise.id}`}
      onClick={clickHandler}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading='lazy'
      />
      <Stack
        direction="row"
      >
        <Button 
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#5DADE2",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize"
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button 
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#76D7C4",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize"
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        textAlign="center"
        color="#000"
        fontWeight="bold"
        pb="10px"
        mt="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard;
