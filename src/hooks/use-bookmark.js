import { getDatabase, ref, get, set } from 'firebase/database';
import React, { useCallback, useState } from 'react'
import { app } from '../utils/firebase';

const useBookmark = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [changed, setChanged] = useState([]);
  const db = getDatabase(app);

  const getBookmarks = useCallback(async (applyBookmarks)=>{
    const userId = localStorage.getItem("userId");
    console.log(userId);
    setIsLoading(true);
    setError(null);
    const usersRef = ref(db, "/users/"+userId+"/bookmarks");
    await get(usersRef).then((snapshot)=>{
      if(snapshot.exists()){
        const data = snapshot.val();
        console.log(data);
        applyBookmarks(data);
      }else{
        console.log("No data found!");
        setError("No data found!");
        applyBookmarks([]);
      }
    }).catch((error)=>{
      console.log(error);
      setError(error.message);
    })
    setIsLoading(false);
  }, []);

  const setBookmarks = useCallback(async (bookmarkIds)=>{
    const userId = localStorage.getItem("userId");
    const displayName = localStorage.getItem("displayName");
    console.log(userId);
    setIsLoading(true);
    setError(null);
    await set(ref(db, "/users/" + userId),
    {
      name: displayName,
      bookmarks: bookmarkIds,
    }).then(()=>{
      console.log("Bookmarked Successfully!");
      setChanged(bookmarkIds);
    }).catch((error)=>{
      console.log("Error-", error);
      setError(error.message);
    });
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    getBookmarks,
    setBookmarks,
    setChanged
  }
}

export default useBookmark;
