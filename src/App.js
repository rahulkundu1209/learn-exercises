import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ExerciseDetailPage from "./pages/ExerciseDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: "/exercise/:id", element: <ExerciseDetailPage/> }
    ]
  }
])

function App() {
  return (
    <Box width="400px" sx={{width:{xl: "1488px"}}} m="auto">
      <RouterProvider router={router}/>
    </Box>
  );
}

export default App;
