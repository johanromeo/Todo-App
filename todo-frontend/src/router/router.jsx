import { createBrowserRouter } from "react-router-dom";

import User from "../components/UserComponent/User.jsx";
import Todo from "../components/TodoComponent/Todo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "/users/:userId/todos",
    element: <Todo />,
  },
]);

export default router;
