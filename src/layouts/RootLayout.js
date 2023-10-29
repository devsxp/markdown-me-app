import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main className="content">
      <Outlet />
    </main>
  );
};

export default RootLayout;
