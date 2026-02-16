
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Função para determinar se uma rota é protegida
const isProtectedRoute = (pathname: string) => {
  // Áreas do cliente são protegidas
  if (pathname.startsWith('/client/')) {
    return true;
  }
  
  // A área de administração é protegida, exceto a página de login
  if (pathname.startsWith('/admin/')) {
    return pathname !== '/admin/login';
  }

  // As rotas de teste são protegidas, exceto o login de teste
  if (pathname.startsWith('/test/')) {
    return pathname !== '/test/login';
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
      // Se a rota é protegida e não há token, redireciona para o login
      // Redireciona para o login de admin se for uma rota de admin/teste, caso contrário para o login do cliente
      if (location.pathname.startsWith('/admin/') || location.pathname.startsWith('/test/')) {
        navigate('/admin/login');
      } else {
        navigate('/start-consultation');
      }
    }
  }, [location, navigate]);

  return <>{children}</>;
};

export default SecureLayout;
