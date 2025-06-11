import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getUserRoleFromToken } from '../../lib/auth';

const PrivateRouteAdmin = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = isAuthenticated();
      const role = getUserRoleFromToken();

      if (!isAuth) {
        nav('/login');
      } else if (role !== 'ADMIN') {
        nav('/');
      } else {
        setAuthorized(true);
      }

      setLoading(false);
    };

    checkAuth();
  }, [nav]);

  if (loading) return null;

  return <>{authorized ? children : null}</>;
};

export default PrivateRouteAdmin;
