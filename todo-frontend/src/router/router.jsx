import { createBrowserRouter } from "react-router-dom";

import UserPage from "../pages/UserPage/UserPage.jsx";
import TodoPage from "../pages/TodoPage/TodoPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/user/:userId/todos",
    element: <TodoPage />,
  },
]);

export default router;
