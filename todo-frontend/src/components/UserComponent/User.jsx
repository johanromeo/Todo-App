import DisplayUser from "./DisplayUser/DisplayUser";

function User(props) {
  const { users, setUsers } = props;

  return (
    <div>
      <h3>Users</h3>
      <DisplayUser users={users} />
    </div>
  );
}

export default User;
