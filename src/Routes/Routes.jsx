import {
    createBrowserRouter
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Home/Shared/ErrorPage";
import Home from "../Home/Home";
import Login from "../Home/Shared/Login/Login";
import Register from "../Home/Shared/Register/Register";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import CreateTask from "../Dashboard/CreateTask/CreateTask";
import AllTasks from "../Home/AllTasks/AllTasks";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>

      },
      {
          path: '/register',
          element: <Register></Register>

      }
    ]
},
{
  path: 'dashboard',
  element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [
    {
      path: 'addTask',
      element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
    },
    {
      path: 'manageTask',
      element: <PrivateRoute><AllTasks></AllTasks></PrivateRoute>
    },
   

  ]
}
]);