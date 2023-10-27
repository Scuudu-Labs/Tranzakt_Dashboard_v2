import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { access_token } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (!access_token) {
    return <Navigate to={'/'} state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedPage;
