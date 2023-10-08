import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Reset from "./components/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },

  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <Username/>
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
