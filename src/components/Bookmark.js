import { Box } from '@mui/material';
import React, { useContext } from 'react';

import BookmarkIcon from "../assets/icons/bookmark.png";
import useBookmark from '../hooks/use-bookmark';
import { RingLoader } from './Loader';
import { AuthContext } from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

const Bookmark = ({isBookmarked, setIsBookmarked, exerciseId}) => {
  const { setBookmarks, getBookmarks, isLoading } = useBookmark();
  const navigate = useNavigate();
  const {authCtx} = useContext(AuthContext);

  const bookmarkHandler = async () =>{
    if(!authCtx.isSignedIn){
      navigate("/auth");
      return;
    }
    const applyBookmarks = (bookmarks) =>{
      if(!isBookmarked){
        if(bookmarks){
          setBookmarks([...bookmarks, exerciseId]);
        }else{
          setBookmarks([exerciseId]);
        }
        setIsBookmarked(true);
      }
      else if(isBookmarked){
        const newBookmarks = bookmarks.filter((bookmark)=>(
          bookmark !== exerciseId
        ))
        setBookmarks(newBookmarks);
        setIsBookmarked(false);
      }
    }
    
    getBookmarks(applyBookmarks);
  }

  return (
    <Box
      pl="100px"
    >
      <button
        className='bookmark-button'
        style={{
          backgroundColor: isBookmarked ? "#1D8348" : "#fff",
        }}
        onClick={bookmarkHandler}
        disabled={isLoading}
      >
        {isLoading ? <RingLoader/> : <img src={BookmarkIcon} alt='bookmark' height="30px" width="30px" />}
      </button>
    </Box>
  )
}

export default Bookmark;
