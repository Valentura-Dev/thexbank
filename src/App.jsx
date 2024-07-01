import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound.jsx";
import { ProtectedRoute } from "./components";
import { useEffect, useState } from "react";
import axiosSetup from "./axiosSetup";
import { Login, Home } from "./pages";
import KYC from "./pages/KYC.jsx";
import Send from "./pages/Send.jsx";
import AddMoney from "./pages/AddMoney.jsx";
import Exchange from "./pages/Exchange.jsx";
import { WagmiProvider } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { fantom } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient()

const projectId = "6833394610e306b19798c7797fc8bab7";

const metadata = {
  name: "Thexbank",
  description: "Thexbank",
  url: "https://thexbank.helpdex.io",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [fantom];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});


createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  defaultChain: fantom,
  allowUnsupportedChain: false
});


const Redirect = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);
  return null;
};

const ThexbankRoutes = () => {
  const location = useLocation();
  function getToken() {
    return localStorage.getItem("token");
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
        <Route path="/add-money" element={<AddMoney />} />
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
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ThexbankRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
      <Toaster />
    </>
  );
};

export default App;
