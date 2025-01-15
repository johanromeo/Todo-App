import "./App.css";
import User from "./components/UserComponent/User";

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://localhost:8080/api/users");
      const data = await response.json();

      console.log(data);

      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>Johans Todo App</h1>
      <div></div>
      <User users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
