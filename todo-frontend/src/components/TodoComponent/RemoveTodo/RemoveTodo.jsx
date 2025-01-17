import { useState } from "react";

function RemoveTodo(props) {
  const { userTodos, setUserTodos, userId } = props;
  const [todoId, setTodoId] = useState("");

  async function deleteTodo(event) {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:8080/api/users/${userId}/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setUserTodos(userTodos.filter((userTodo) => userTodo.id != todoId));
      setTodoId("");
    }
  }
  return (
    <div>
      <form onSubmit={deleteTodo}>
        <input
          type="text"
          placeholder="Enter ID"
          value={todoId}
          onChange={(event) => setTodoId(event.target.value)}
        />
        <button type="submit">Delete todo by ID</button>
      </form>
    </div>
  );
}

export default RemoveTodo;
