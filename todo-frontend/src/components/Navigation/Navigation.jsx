import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar item" to={"/"}>
        Home Page
      </Link>
      <Link className="nav-bar item" to={"/users"}>
        Users
      </Link>
    </nav>
  );
}

export default Navigation;
