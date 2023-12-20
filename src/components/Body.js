import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ViewMovie from './ViewMovie';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watch",
    element: <ViewMovie />,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
