import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound.jsx';
import { ProtectedRoute } from './components';
import { useEffect, useState } from 'react';
import axiosSetup from './axiosSetup';
import { Login, Home } from "./pages";

const HelpDexRoutes = () => {
  const location = useLocation();
  function getToken() {
    return localStorage.getItem('token');
  }

  const [token, _] = useState(getToken());

  useEffect(() => {
    axiosSetup(token);
  }, [token]);

  return (
    <Routes location={location}>
      <Route element={<ProtectedRoute />} errorElement={<NotFound />}>
        <Route path="/" element={<></>} />
        <Route path="/dashboard" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HelpDexRoutes />
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
