import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import ManageUserPage from "./pages/ManageUser";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/manageuser"} element={<ManageUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
