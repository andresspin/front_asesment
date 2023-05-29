import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home,Detail,About } from "../pages";//se importan pages para ubicar componente en la ruta

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
    errorElement: <div> Hubo un error!!</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
