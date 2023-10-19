import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import ManageUserPage from "./pages/ManageUser";
import EachUser from "./pages/ManageUser/EachUser";
function App() {
  

  return (
    <div className="font-montserrat">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/manageuser"} element={<ManageUserPage />} />
          <Router path={"/manageuser:id"} element={<EachUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
