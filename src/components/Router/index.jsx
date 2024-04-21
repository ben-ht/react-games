import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../Layout";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import Profil from "../Profil";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/profile", element: <Profil /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
