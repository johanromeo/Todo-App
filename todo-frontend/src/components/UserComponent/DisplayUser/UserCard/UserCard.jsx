import "./UserCard.css";

function UserCard(props) {
  const { user, navigateToUserTodoPage } = props;

  return (
    <div className="user-card">
      <li>
        <strong>Username:</strong> {user.username}
      </li>
      <button
        className="user-card-button"
        onClick={() => navigateToUserTodoPage(user.id)}
      >
        See Todos
      </button>
    </div>
  );
}

export default UserCard;
