import { Link } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-users">
      <h3>Add Your User</h3>
      <Link to="/users">
        <img src="/users.png" alt="A group of users" />
      </Link>
      <h4>Click me!</h4>
    </div>
  );
}

export default HomePage;
