import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import ManageUserPage from './pages/ManageUser';
import ResetPassword from './pages/ResetPassword';
import VerifyAccount from './pages/VerifyAccount';
import NotFound from './pages/NotFound';
import ConfirmPassword from './pages/ConfirmPassword';
import Success from './pages/Success';
import { Providers } from './redux/provider';
import 'react-toastify/dist/ReactToastify.min.css';
import ProtectedPage from './components/layout/ProtectedPage';
import PublicPage from './components/layout/PublicPage';
import EachUser from './pages/ManageUser/individualUser';

function App() {
  return (
    <Providers>
      <div className="font-montserrat">
        <BrowserRouter>
          <Routes>
            <Route
              path={'/'}
              element={
                <PublicPage>
                  <LoginPage />
                </PublicPage>
              }
            />
            <Route
              path={'/change_password'}
              element={
                <PublicPage>
                  <ConfirmPassword />
                </PublicPage>
              }
            />
            <Route
              path={'/verify_account'}
              element={
                <PublicPage>
                  <VerifyAccount />
                </PublicPage>
              }
            />
            <Route
              path={'/reset_password'}
              element={
                <PublicPage>
                  <ResetPassword />
                </PublicPage>
              }
            />
            <Route
              path={'/dashboard'}
              element={
                <ProtectedPage>
                  <DashboardPage />
                </ProtectedPage>
              }
            />
            <Route
              path={'/manageuser'}
              element={
                <ProtectedPage>
                  <ManageUserPage />
                </ProtectedPage>
              }
            />
            <Route
              path={'/manageuser/:id'}
              element={
                <ProtectedPage>
                  <EachUser />
                </ProtectedPage>
              }
            />
            <Route
              path={'/success'}
              element={
                <PublicPage>
                  <Success />
                </PublicPage>
              }
            />
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Providers>
  );
}

export default App;
