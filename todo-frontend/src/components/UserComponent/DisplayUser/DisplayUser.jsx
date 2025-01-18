import UserCard from "./UserCard/UserCard";
import RemoveUser from "../RemoveUser/RemoveUser";

function DisplayUser(props) {
  const { users, setUsers, navigateToUserTodoPage } = props;

  const userCardComponents = users.map((user) => {
    return (
      <div key={user.id} className="user-card">
        <UserCard
          username={user.username}
          user={user}
          navigateToUserTodoPage={navigateToUserTodoPage}
        />
        <RemoveUser userId={user.id} users={users} setUsers={setUsers} />
      </div>
    );
  });

  return (
    <div>
      <ul>{userCardComponents}</ul>
    </div>
  );
}

export default DisplayUser;
