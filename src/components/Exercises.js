import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData';

import Loader from './Loader';

const Exercises = ({ exercises, bodyPart, setExercises}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      setIsLoading(true);

      setCurrentPage(1);
      let exercisesData = [];
      if(bodyPart === "all"){
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises?limit=1000`, exerciseOptions);
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
      }
      
      setExercises(exercisesData);
      setIsLoading(false);

    }

    fetchExercisesData();

  }, [bodyPart])

  const exercisesPerPage = 9;

  const paginate = (e, value) =>{
    setCurrentPage(value);
    window.scrollTo({ top: "1800", behavior: "smooth" });
  }

  const indexOfFirstExercise = (currentPage-1)*exercisesPerPage;
  const indexOfLastExercise = indexOfFirstExercise + exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px"}
      }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant='h3'
        mb="40px"
      >
        Showing Results
      </Typography>
      {isLoading ? <Loader/> : (<Box>
      <Stack
        direction="row"
        sx={{ gap: {lg: "110px", xs: "50px"}}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack
        mt="100px"
        alignItems="center"
      >
        {exercises.length > 9 &&(
          <Pagination
            color="standard"
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )
        }
      </Stack>
      </Box>)}
    </Box>
  )
}

export default Exercises
