import UserCard from "./UserCard/UserCard";

function DisplayUser(props) {
  const { users } = props;

  const userCardComponents = users.map((user) => {
    return <UserCard username={user.username} key={user.id} user={user} />;
  });

  return (
    <div>
      <ul>{userCardComponents}</ul>
    </div>
  );
}

export default DisplayUser;
