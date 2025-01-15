import { useState } from "react";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const { setUsers } = props;

  async function createUser(e) {
    e.preventDefault();

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
    }
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default AddUser;
