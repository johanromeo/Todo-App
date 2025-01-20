import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "./router/router";

function App() {
  return (
    <main>
      <h1>Todo Buddy</h1>
      <RouterProvider router={router} />
      <footer className="footer">
        All rights reserved &copy; Johan Romeo 2025
      </footer>
    </main>
  );
}

export default App;
