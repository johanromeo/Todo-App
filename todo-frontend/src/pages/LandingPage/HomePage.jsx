import { Link } from "react-router-dom";
import UserPage from "../UserPage/UserPage";

function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/users" element={UserPage}>
          Users
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;
