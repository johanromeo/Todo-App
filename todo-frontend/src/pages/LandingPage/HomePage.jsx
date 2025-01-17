import { Link } from "react-router-dom";
import UserPage from "../UserPage/UserPage";

function HomePage() {
  return (
    <div>
      <Link to="/users" element={UserPage}>
        Users
      </Link>
    </div>
  );
}

export default HomePage;
