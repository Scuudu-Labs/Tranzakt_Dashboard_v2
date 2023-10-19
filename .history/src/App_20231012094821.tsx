import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import ManageUserPage from "./pages/ManageUser";
import ResetPassword from "./pages/ResetPassword";
import VerifyAccount from "./pages/VerifyAccount";
import ConfirmPassword from "./pages/ConfirmPassword";


function App() {

  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/change_password"} element={<ConfirmPassword />} />
          <Route path={"/verify_account"} element={<VerifyAccount />} />
          <Route path={"/reset_password"} element={<ResetPassword />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/manageuser"} element={<ManageUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
