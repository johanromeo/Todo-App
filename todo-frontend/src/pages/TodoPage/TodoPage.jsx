import DisplayTodo from "../../components/TodoComponent/DisplayTodo/DisplayTodo";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddTodo from "../../components/TodoComponent/AddTodo/AddTodo";
import RemoveTodo from "../../components/TodoComponent/RemoveTodo/RemoveTodo";

function TodoPage() {
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
      <AddTodo setUserTodos={setUserTodos} userId={userId} />
      <RemoveTodo
        // Brain lag, do i even need all of these?
        userTodos={userTodos}
        setUserTodos={setUserTodos}
        userId={userId}
      />
    </main>
  );
}

export default TodoPage;
