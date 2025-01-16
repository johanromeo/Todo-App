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
      console.log(data);
    }
    getUserTodos();
  }, [userId]);

  return (
    <main>
      <h1>User Todos</h1>
    </main>
  );
}

export default Todo;
