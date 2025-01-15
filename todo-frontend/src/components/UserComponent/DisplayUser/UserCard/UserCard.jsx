function UserCard(props) {
  const { user } = props;

  return (
    <div>
      <p>
        ID: {user.id} User: {user.username}
      </p>
    </div>
  );
}

export default UserCard;
