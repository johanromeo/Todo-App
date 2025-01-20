import "./RemoveUser.css";

function RemoveUser(props) {
  const { users, setUsers, userId } = props;

  async function deleteUser(e) {
    e.preventDefault();

    const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setUsers(users.filter((user) => user.id != userId));
    }
  }

  return (
    <div>
      <button className="delete-user-button" onClick={deleteUser}>
        🗑️
      </button>
    </div>
  );
}

export default RemoveUser;
