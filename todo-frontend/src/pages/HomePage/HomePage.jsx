import { Link } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-users">
      <h2>Users</h2>
      <Link to="/users">
        <img src="../../../public/users.png" alt="A group of users" />
      </Link>
    </div>
  );
}

export default HomePage;
