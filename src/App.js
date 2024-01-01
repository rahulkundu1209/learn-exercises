import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";
import Auth from "./pages/Authentication";
import { AuthContext } from "./store/auth-context";
import { useEffect, useState } from "react";
import BookmarkedExercises from "./pages/BookmarkedExercises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "exercise/:id", element: <ExerciseDetailPage/> },
      { path: "auth", element: <Auth/> },
      { path: "bookmarks", element: <BookmarkedExercises/>}
    ]
  }
])

function App() {
  const [authCtx, setAuthCtx] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  
  useEffect(()=>{
    if(localStorage.getItem("userId") && localStorage.getItem("displayName")){
      setAuthCtx({
        isSignedIn: true,
        userId: localStorage.getItem("userId"),
        displayName: localStorage.getItem("displayName"),
      })
    }else{
      setAuthCtx({
        isSignedIn: false,
        userId: null,
        displayName: null,
      })
    }
  }, [])

  const ctxValue = {
    authCtx: authCtx,
    setAuthCtx: setAuthCtx,
    bookmarks: bookmarks,
    setBookmarks: setBookmarks
  }

  return (
    <AuthContext.Provider value={ctxValue} >
    <Box width="400px" sx={{width:{xl: "1488px"}}} m="auto">
      <RouterProvider router={router}/>
    </Box>
    </AuthContext.Provider>
  );
}

export default App;
