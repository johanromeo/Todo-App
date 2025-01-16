import DisplayUser from "./DisplayUser/DisplayUser";
import AddUser from "./AddUser/AddUser";
import RemoveUser from "./RemoveUser/RemoveUser";

import { useState, useEffect } from "react";

function User() {
  const [users, setUsers] = useState([]);
  // const [todos, setTodos] = useState([]);

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
      <h3>Users</h3>
      <DisplayUser users={users} />
      <AddUser setUsers={setUsers} />
      <RemoveUser users={users} setUsers={setUsers} />
    </div>
  );
}

export default User;
