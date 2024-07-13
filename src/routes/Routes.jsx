import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Onboarding1 from "../pages/Onboarding/Onboarding1";
import Onboarding2 from "../pages/Onboarding/Onboarding2";
import Onboarding3 from "../pages/Onboarding/Onboarding3";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PostLogin from "../pages/PostLogin/PostLogin";
import TrackingScreen from "../pages/TrackingScreen/TrackingScreen";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path:"/",
            element: <Onboarding1/>,
        },
        {
            path:"/onboarding2",
            element: <Onboarding2/>,
        },
        {
            path:"/onboarding3",
            element: <Onboarding3/>,
        },
        {
            path:"/login",
            element: <Login/>,
        },
        {
            path:"/register",
            element: <Register/>,
        },
        {
            path:"/post_login",
            element: <PostLogin/>,
        },
        {
            path:"/tracking_screen",
            element: <TrackingScreen/>,
        },
        
      ],
    },
  ]);