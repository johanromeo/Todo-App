import { useState } from "react";
import "../AddTodo/AddTodo.css";

function AddTodo(props) {
  // Variables for useState (input fields)
  const [todo, setTodo] = useState("");
  const { setUserTodos, userId } = props;

  const newTodo = {
    todo: todo,
  };

  // Function to call backend API to add a new todo
  async function addTodo(event) {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:8080/api/users/${userId}/todos`,
      {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const savedTodo = await response.json();
      setUserTodos((prevTodos) => [...prevTodos, savedTodo]);
      setTodo("");
    }
  }
  // Endpoint: `http://localhost:8080/api/users/${userId}/todos`
  // Variable for storing new todo
  // Variable for the fetch
  // Variable for the response
  // Make a copy of the state array and add the new todo

  // When we click "Add new Todo", then open a modal/form with input fields
  // Input fields:
  // Todo

  return (
    <div>
      {/* <form onSubmit={addTodo}> */}
      <input
        type="text"
        placeholder="Enter new todo"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add new todo
      </button>
      {/* </form> */}
    </div>
  );
}

export default AddTodo;
