import { useState } from "react";

function RemoveUser(props) {
  // For user state manipulation
  const { users, setUsers } = props;
  // Saving the input userId in a state
  const [userId, setUserId] = useState("");

  // Delete request preventing automatically new loading
  async function deleteUser(e) {
    e.preventDefault();

    // Perform the delete request with a dynamic userId value and stor it in a variable
    const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
      method: "DELETE",
    });

    // If the response is ok...
    if (response.ok) {
      // filter the users in the state by the userId input.
      // If the userId input matches the actual user id, remove it.
      setUsers(users.filter((user) => user.id != userId));
      // Sets the state to 0
      setUserId("");
    }
  }

  return (
    <div>
      <form onSubmit={deleteUser}>
        <input
          // "text" to remove the ugly up/down arrows
          type="text"
          placeholder="Enter ID"
          value={userId}
          onChange={(event) => setUserId(Number(event.target.value))}
        />
        <button type="submit">Delete user by ID</button>
      </form>
    </div>
  );
}

export default RemoveUser;
