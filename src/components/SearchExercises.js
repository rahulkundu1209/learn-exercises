import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [inputText, setInputText] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchBodyPartsData = async () =>{
      // const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
      const bodyPartsData = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
      setBodyParts(["all", ...bodyPartsData]);
      console.log(bodyParts);
    }

    fetchBodyPartsData();
  }, []);

  const handleSearchInput = (event) =>{
    setInputText(event.target.value.toLowerCase());
  }

  const handleSearch = async () =>{
    if(inputText){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10000', exerciseOptions);
      // console.log(exercisesData);
      
      const searchedExercises = exercisesData.filter((exercise) =>
        exercise.name.toLowerCase().includes(inputText) ||
        exercise.target.toLowerCase().includes(inputText)||
        exercise.bodyPart.toLowerCase().includes(inputText)||
        exercise.equipment.toLowerCase().includes(inputText)
      );

      setInputText("");
      setExercises(searchedExercises);
      // console.log(exercises);
    }
  }

  return (
    <Stack
      alignItems= 'center'
      justifyContent= 'center'
      mt= "35px"
      p = "20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize:{ lg: "44px", xs: "30px" }}}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Stack
        direction="row"
      >
      <TextField
        sx={{ 
          input: {
            fontWeight: "700",
            border: "none",
            borderRadius: "40px"
          },
          width: { lg: "800px", xs: "350px" },
          backgroundColor: "#fff",
          borderRadius: "4px"
         }}
        height = "76px"
        value={inputText}
        onChange={handleSearchInput}
        placeholder='Search  Exercises...'
        type='text'
      />
      <Button
        className='search-btn'
        onClick={handleSearch}
        sx={{
          bgcolor: "#1D8348",
          color: "#fff",
          textTransform: "none",
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: "20px", xs: "14px" },
          height: "56px",
        }}
      >
        Search
      </Button>
      </Stack>
      <Box 
        sx={{ position: "relative", width: "100%", p: "20px" }}
      >
        <HorizontalScrollBar 
          data = {bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
