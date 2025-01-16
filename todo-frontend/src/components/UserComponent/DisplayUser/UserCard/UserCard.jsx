function UserCard(props) {
  const { user, navigateToUserTodoPage } = props;

  return (
    <div>
      <li>
        <h3>ID: {user.id}</h3>
        <h3>Username: {user.username}</h3>
        <button onClick={() => navigateToUserTodoPage(user.id)}>
          See {user.username}'s todos
        </button>
      </li>
    </div>
  );
}

export default UserCard;
