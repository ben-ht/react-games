import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
