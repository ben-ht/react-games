import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
