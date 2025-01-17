import DisplayTodo from "../../components/TodoComponent/DisplayTodo/DisplayTodo";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Todo() {
  const [userTodos, setUserTodos] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    async function getUserTodos() {
      const response = await fetch(
        `http://localhost:8080/api/users/${userId}/todos`
      );
      const data = await response.json();

      setUserTodos(data);
    }
    getUserTodos();
  }, [userId]);

  return (
    <main>
      <h2>User Todos</h2>
      <DisplayTodo userTodos={userTodos} />
    </main>
  );
}

export default Todo;
