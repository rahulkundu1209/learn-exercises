import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Box, Button, Stack, TabScrollButton, Typography } from "@mui/material";
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, exercises}) => {

  return (
    <>
    <div
      className='scroll-menu'
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "fitContent",
        overflowX: "scroll",
        overflowY: "hidden",
        paddingBottom: "20px"
      }}
    >
      {
        data.map((item, index) =>(
          <Box
            key={item.id || item}
            item = {item.id || item}
            title = {item.id || item}
            m = " 0 4px"
          >
            {bodyPart && (<BodyPart 
              item = {item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />)}

            {exercises && (
              
                <ExerciseCard key={index} exercise={item} />
              
            )}
          </Box>
        ))
      }
    </div>
    {/* <div className='pseduo-track' /> */}
    </>
  )
}

export default HorizontalScrollBar;
