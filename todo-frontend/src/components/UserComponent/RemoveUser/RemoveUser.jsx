//import { useState } from "react";

function RemoveUser(props) {
  // For user state manipulation
  const { users, setUsers, userId } = props;
  // Saving the input userId in a state
  // const [userId, setUserId] = useState("");

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
      //setUserId("");
    }
  }

  return (
    <div>
      <button onClick={deleteUser}>Delete user</button>
    </div>
  );
}

export default RemoveUser;
