import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Login from "../Login";
import Register from "../Register";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
