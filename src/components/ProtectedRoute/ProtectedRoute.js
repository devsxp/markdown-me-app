import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import { config } from '../../config';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const firebaseApp = initializeApp(config.firebase);
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setUser(user);
    }
  });

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  if (user) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
};

export default ProtectedRoute;
