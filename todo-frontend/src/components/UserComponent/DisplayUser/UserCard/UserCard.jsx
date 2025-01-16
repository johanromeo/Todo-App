function UserCard(props) {
  const { user } = props;

  return (
    <div>
      <li>
        <h3>ID: {user.id}</h3>
        <h3>Username: {user.username}</h3>
      </li>
    </div>
  );
}

export default UserCard;
