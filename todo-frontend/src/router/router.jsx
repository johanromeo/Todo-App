import { createBrowserRouter } from "react-router-dom";

import UserPage from "../pages/UserPage/UserPage.jsx";
import TodoPage from "../pages/TodoPage/TodoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
  },
  {
    path: "/users/:userId/todos",
    element: <TodoPage />,
  },
]);

export default router;
