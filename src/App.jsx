import './App.css';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound.jsx';
import { ProtectedRoute } from './components';
import { useEffect, useState } from 'react';
import axiosSetup from './axiosSetup';
import { Login, Home } from "./pages";
import KYC from "./pages/KYC.jsx";
import Exchange from "./pages/Exchange.jsx";
import Send from "./pages/Send.jsx";

const Redirect = ({to}) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);
  return null;
};

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
        <Route path="/" element={<Redirect to="/dashboard" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/verify-kyc" element={<KYC />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/send" element={<Send />} />
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
