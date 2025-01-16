import UserCard from "./UserCard/UserCard";

function DisplayUser(props) {
  const { users, navigateToUserTodoPage } = props;

  const userCardComponents = users.map((user) => {
    return (
      <UserCard
        key={user.id}
        username={user.username}
        user={user}
        navigateToUserTodoPage={navigateToUserTodoPage}
      />
    );
  });

  return (
    <div>
      <ul>{userCardComponents}</ul>
    </div>
  );
}

export default DisplayUser;
