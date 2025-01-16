import DisplayUser from "./DisplayUser/DisplayUser";
import AddUser from "./AddUser/AddUser";
import RemoveUser from "./RemoveUser/RemoveUser";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const navigateToUserTodoPage = (userId) => {
    navigate(`/users/${userId}/todos`);
  };

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://localhost:8080/api/users");
      const data = await response.json();

      setUsers(data);
    }
    getUsers();
  }, [setUsers]);

  return (
    <div>
      <h3>Users</h3>
      <DisplayUser
        users={users}
        navigateToUserTodoPage={navigateToUserTodoPage}
      />
      <AddUser setUsers={setUsers} />
      <RemoveUser users={users} setUsers={setUsers} />
    </div>
  );
}

export default User;
