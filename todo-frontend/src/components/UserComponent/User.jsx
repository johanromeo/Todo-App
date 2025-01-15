import DisplayUser from "./DisplayUser/DisplayUser";
import AddUser from "./AddUser/AddUser";

function User(props) {
  const { users, setUsers } = props;

  return (
    <div>
      <h3>Users</h3>
      <DisplayUser users={users} />
      <AddUser setUsers={setUsers} />
    </div>
  );
}

export default User;
