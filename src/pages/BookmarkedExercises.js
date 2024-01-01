import { Box, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/auth-context';
import useBookmark from '../hooks/use-bookmark';
import ExerciseCard from '../components/ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Loader from '../components/Loader';
import Auth from './Authentication';

const BookmarkedExercises = () => {
  const { authCtx } = useContext(AuthContext);
  const [ loading, setLoading ] = useState(false);
  const [bookmarkedExercises, setBookmarkedExercises] = useState([]);
  const { getBookmarks } = useBookmark();

  useEffect(()=>{
    setLoading(true);
    const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
    const fetchBookmarkedExercises = async (bookmarkIds) =>{
      try{
        const promises = bookmarkIds.map( async (bookmarkId)=>
          fetchData(`${exerciseDBUrl}/exercises/exercise/${bookmarkId}`, exerciseOptions)
        );
        const bookmarkedExercisesData = await Promise.all(promises);
        setBookmarkedExercises(bookmarkedExercisesData);
      }catch(error){
        console.log("Error", error.message);
      }finally{
        setLoading(false);
      }
    };
    getBookmarks(fetchBookmarkedExercises);
  }, [authCtx]);

  if(!authCtx.isSignedIn){
    return(
      <>
        <Auth/>
      </>
    )
  }

  return (
    <>
    {loading ? <Loader height="72vh"/> : (
    <Box
      margin="24px"
      minHeight="67vh"
    >
      <Typography variant='h4' >Welcome Back {authCtx.displayName}! <br/></Typography>
      <Typography 
      width="100%"
      textAlign="center"
      > &nbsp; &nbsp; You've taken a significant step towards a healthier, happier you. Each bookmark represents a commitment to your well-being. Remember, consistency is the key to success on your fitness journey. Embrace the challenges, celebrate the victories, and let these exercises guide you to a stronger, fitter version of yourself.</Typography>
      <Box
        mt="50px"
      >
        {bookmarkedExercises.length ? (
          <Stack
            direction="row"
            sx={{ gap: {lg: "110px", xs: "50px"}}}
            flexWrap="wrap"
            justifyContent="center"
          >
          {bookmarkedExercises.map((exercise)=>(
            <>
            <ExerciseCard exercise={exercise} />
            </>
          ))}
          </Stack>
        ):(
          
          <Typography 
            textAlign="center"
            variant="h4"
            sx={{
              opacity: "0.2",
              
            }}
          >
            Show your dedication by adding exercises to bookmark.
          </Typography>
        )}
      </Box>
    </Box>
    )}
    </>
  )
}

export default BookmarkedExercises;
