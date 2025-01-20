import DisplayUser from "../../components/UserComponent/DisplayUser/DisplayUser";
import AddUser from "../../components/UserComponent/AddUser/AddUser";

import "./UserPage.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const navigateToUserTodoPage = (userId) => {
    navigate(`/user/${userId}/todos`);
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
    <div className="users">
      <h3>Users</h3>
      <div className="users-display">
        <DisplayUser
          users={users}
          setUsers={setUsers}
          navigateToUserTodoPage={navigateToUserTodoPage}
        />
      </div>
      <div>
        <AddUser setUsers={setUsers} />
      </div>
    </div>
  );
}

export default UserPage;
