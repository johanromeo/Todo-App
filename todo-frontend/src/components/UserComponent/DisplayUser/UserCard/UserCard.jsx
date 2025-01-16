function UserCard(props) {
  const { user, navigateToUserTodoPage } = props;

  return (
    <div>
      <li>ID: {user.id}</li>
      <li>Username: {user.username}</li>
      <button onClick={() => navigateToUserTodoPage(user.id)}>
        See {user.username}'s todos
      </button>
    </div>
  );
}

export default UserCard;
