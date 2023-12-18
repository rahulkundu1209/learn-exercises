import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeSearchOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Loader from '../components/Loader';

const ExerciseDetailPage = () => {
  const {id} = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarTargetMuscelExercises, setSimilarTargetMuscelExercises] = useState([]);
  const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const exerciseDetailData = {
  //   bodyPart: "waist",
  //   equipment: "body weight",
  //   gifUrl: "https://v2.exercisedb.io/image/ak0doyBeXm1uVy",
  //   id: "0001",
  //   instructions: ['Lie flat on your back with your knees bent and feet flat on the ground.', 'Place your hands behind your head with your elbows pointing outwards.', 'Engaging your abs, slowly lift your upper body off…forward until your torso is at a 45-degree angle.', 'Pause for a moment at the top, then slowly lower your upper body back down to the starting position.', 'Repeat for the desired number of repetitions.'],
  //   name: "3/4 sit-up",
  //   secondaryMuscles: ['hip flexors', 'lower back'],
  //   target: "abs"
  // }

  useEffect(()=>{
    const fetchExerciseDetail = async () =>{
      setIsLoading(true);

      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeSearchOptions);
      setExerciseVideos(exerciseVideosData);

      const similarTargetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setSimilarTargetMuscelExercises(similarTargetMuscleExercisesData);

      const similarEuipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setSimilarEquipmentExercises(similarEuipmentExercisesData);

      setIsLoading(false);
    }

    fetchExerciseDetail();
  }, [id]);

  return (
    <>
    {isLoading ? <Loader height="72vh" /> : (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos.contents} name={exerciseDetail.name} />
      <SimilarExercises similarEquipmentExercises={similarEquipmentExercises} equipment={exerciseDetail.equipment} similarTargetMuscelExercises={similarTargetMuscelExercises} target={exerciseDetail.target} />
    </div>)}
    </>
  )
}

export default ExerciseDetailPage
