import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../header/Header';

const ProtectedRoute = () => {
  const isAuthentected = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentected) {
      navigate('/');
    }
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
