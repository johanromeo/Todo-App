import UserCard from "./UserCard/UserCard";
import RemoveUser from "../RemoveUser/RemoveUser";
import "./DisplayUser.css";

function DisplayUser(props) {
  const { users, setUsers, navigateToUserTodoPage } = props;

  const userCardComponents = users.map((user) => {
    return (
      <div key={user.id} className="user-card-container">
        <UserCard
          username={user.username}
          user={user}
          navigateToUserTodoPage={navigateToUserTodoPage}
        />

        <div className="remove-user">
          <RemoveUser userId={user.id} users={users} setUsers={setUsers} />
        </div>
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
