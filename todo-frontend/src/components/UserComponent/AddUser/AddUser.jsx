import { useState } from "react";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const { setUsers } = props;

  async function createUser(event) {
    event.preventDefault();

    // Preventing no-named users to be created. Need to fix this in backend instead of here!
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
    <div>
      {/* <form onSubmit={createUser}> */}
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="button" onClick={createUser}>
        Add user
      </button>
      {/* </form> */}
    </div>
  );
}

export default AddUser;
