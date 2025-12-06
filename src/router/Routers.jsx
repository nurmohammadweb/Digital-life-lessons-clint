import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      
      {
        index: true,
        path: "/",
        element: <Home></Home>
      }

    ]
  },
]);


export default router;