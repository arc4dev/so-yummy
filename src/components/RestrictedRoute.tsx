import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContexts';

type Props = {
  component: React.ReactNode;
  redirectTo?: string;
};

const RestrictedRoute = ({ component: Component, redirectTo = '/' }: Props) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
