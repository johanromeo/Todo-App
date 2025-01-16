import { createBrowserRouter } from "react-router-dom";

import User from "../components/UserComponent/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
]);

export default router;
