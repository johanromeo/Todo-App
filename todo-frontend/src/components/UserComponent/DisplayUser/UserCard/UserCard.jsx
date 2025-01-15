function UserCard(props) {
  const { user } = props;

  return (
    <div>
      <p>id: {user.id}</p>
      <p>Name: {user.username}</p>
    </div>
  );
}

export default UserCard;
