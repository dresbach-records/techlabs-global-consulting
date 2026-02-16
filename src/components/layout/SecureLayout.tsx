
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const isProtectedRoute = (pathname: string) => {
  // Rotas de teste nunca são protegidas
  if (pathname.startsWith('/test/')) {
    return false;
  }

  // Áreas do cliente são protegidas
  if (pathname.startsWith('/client/')) {
    return true;
  }
  
  // A área de administração é protegida, exceto a página de login
  if (pathname.startsWith('/admin/')) {
    return pathname !== '/admin/login';
  }

  // Todas as outras rotas são públicas
  return false;
};

const SecureLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const needsAuth = isProtectedRoute(location.pathname);

    if (needsAuth && !token) {
      if (location.pathname.startsWith('/admin/')) {
        navigate('/admin/login');
      } else {
        navigate('/start-consultation');
      }
    }
  }, [location, navigate]);

  return <>{children}</>;
};

export default SecureLayout;
