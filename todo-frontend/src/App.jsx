import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "./router/router";

function App() {
  return (
    <main>
      <h1>Johan's Todo Application</h1>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
