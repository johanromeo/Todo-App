import { useState } from "react";

import "./AddUser.css";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const { setUsers } = props;

  async function createUser(event) {
    event.preventDefault();

    if (username === "") {
      return;
    }

    const newUser = {
      username: username,
    };

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const savedUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, savedUser]);
      setUsername("");
    }
  }

  return (
    <div className="add-user">
      <form onSubmit={createUser}>
        <input
          className="add-user-input"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button className="add-user-button" type="button" onClick={createUser}>
          Add user
        </button>
      </form>
    </div>
  );
}

export default AddUser;
