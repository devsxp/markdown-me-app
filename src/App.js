import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import RootLayout from './layouts/RootLayout';
import Dashboard from './views/dashboard/Dashboard';
import Editor from './views/editor/Editor';
import Home from './views/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="editor/:id" element={<Editor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
