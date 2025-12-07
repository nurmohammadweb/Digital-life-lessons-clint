import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home.jsx"
import Login from "../pages/login/Login.jsx";
import Register from "../pages/register/Register.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      
      {
        index: true,
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/auth/login",
        element:<Login></Login>
      },
      {
        path: "/auth/regester",
        element:<Register></Register>
      }

    ]
  },
]);


export default router;