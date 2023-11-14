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
import Campaign from './pages/Campaign';
import Content from './pages/Content';

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
                <ProtectedPage>
                  <ConfirmPassword />
                </ProtectedPage>
              }
            />
            <Route
              path={'/verify_account'}
              element={
                <PublicPage link="change_password">
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
              path={'/campaign'}
              element={
                <ProtectedPage>
                  <Campaign />
                </ProtectedPage>
              }
            />
            <Route
              path={'/content'}
              element={
                <ProtectedPage>
                  <Content />
                </ProtectedPage>
              }
            />
            <Route
              path={'/success'}
              element={
                <ProtectedPage>
                  <Success />
                </ProtectedPage>
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
