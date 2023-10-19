import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import ManageUserPage from "./pages/ManageUser";
import ResetPassword from "./pages/ResetPassword";

function App() {

  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/reset_password"} element={<ResetPassword />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/manageuser"} element={<ManageUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
