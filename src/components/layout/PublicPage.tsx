import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const PublicPage = ({
  children,
  link = 'dashboard',
}: {
  children: React.ReactNode;
  link?: string;
}) => {
  const { access_token, user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (access_token && user.role === ('SUPER_ADMIN' || 'ADMIN')) {
    return <Navigate to={`/${link}`} state={{ from: location }} replace />;
  }
  return children;
};

export default PublicPage;
