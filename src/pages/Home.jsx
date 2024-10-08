import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoText from "../assets/icons/LogoTextBlack.png";
import bitcoin from "../assets/icons/bitcoin.png";
import ethereum from "../assets/icons/ethereum.png";
import sol from "../assets/icons/sol.png";
import usdt from "../assets/icons/usdt.png";
import eur from "../assets/icons/eur.png";
import gbp from "../assets/icons/gbp.png";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";



const data = [
  {
    icon: bitcoin,
    title: "Bitcoin",
    short: "BTC",
    balance: "0.00",
  },
  {
    title: "Ethereum",
    icon: ethereum,
    short: "ETH",
    balance: "0.00",
  },
  {
    title: "SOL",
    icon: sol,
    short: "SOL",
    balance: "0.00",
  },
  {
    title: "USDT",
    icon: usdt,
    short: "USDT",
    balance: "0.00",
  },
  {
    title: "EUR",
    icon: eur,
    short: "EUR",
    balance: "0.00",
  },
  {
    title: "GBP",
    icon: gbp,
    short: "GBP",
    balance: "0.00",
  },
];

const Home = () => {
  const [KYC, setKYC] = useState({});
  const [isKYCVerified, setIsKYCVerified] = useState(false);
  const [user, setUser] = useState({});

  const { open, close, disconnect } = useWeb3Modal();
  const { address,chainId, isConnected } = useAccount();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append(
      "Authorization",
      "token ead03582c4972c7c9f116cb49e730eb97e214b05"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://dev.thexbank.io/api/users/profile/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUser(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const pureKYC = localStorage.getItem("kyc");
    if (!pureKYC) {
      setIsKYCVerified(false);
      return;
    } else {
      setIsKYCVerified(true);
    }

    const kyc = JSON.parse(pureKYC);
    setKYC(kyc);
  }, []);

  const connectWallet = () => {
    open();
  };

  const getButtonText = () => {
    if(chainId !== 250 && isConnected) {
      return "Wrong Network"
    } else {
      return address ? address : "Connect Wallet"
    }
   
  }

  return (
    <div className="flex flex-col items-center">
      <img src={LogoText} alt="" className="w-[150px] mt-3" />
      <div className="mt-16 w-full px-9">
        <a href="/verify-kyc">
          <button
            className={
              isKYCVerified
                ? " bg-accent-700 w-full rounded-[10px] py-[17px]"
                : " bg-dangerous-700 w-full rounded-[10px] py-[17px]"
            }
          >
            <h4 className="font-bold text-secondary-700">
              {isKYCVerified ? "KYC (Pending)" : "Complete Your KYC"}
            </h4>
          </button>
        </a>
      </div>
      <div className="mt-6 w-full px-9">
        <div className="w-full p-[21px] shadow-[rgba(0,0,0,0.16)_0px_3px_0px_0px] rounded-[30px] flex flex-col bg-primary-400">
          <h3 className="font-bold">Total Balance</h3>
          <h2 className="font-semibold">$ 0.00</h2>
        </div>
      </div>
      <div className="mt-6 w-full px-9 flex gap-3">
        <div className="flex-1">
          <a href="/add-money" className="flex-1 w-full">
            <button className=" bg-primary-700 flex-1 w-full border-[1px] border-secondary-50 px-[11px] py-[16px] rounded-[10px]">
              <h5 className=" text-secondary-700">Add Money</h5>
            </button>
          </a>
        </div>
        <div className="flex-1">
          <a href="/exchange" className="flex-1 w-full">
            <button className=" border-[1px] flex-1 w-full h-full border-primary-700 px-[11px] py-[16px] rounded-[10px]">
              <h5 className=" text-primary-700">Exchange</h5>
            </button>
          </a>
        </div>
        <a
          href="/send"
          className="flex justify-center items-center cursor-pointer bg-primary-700 border-[1px] border-secondary-50 px-[11px] py-[16px] rounded-[10px] flex-1"
        >
          <h5 className=" text-secondary-700">Send</h5>
        </a>
      </div>

      <button
        onClick={connectWallet}
        className="border-2 border-blue-500 bg-blue-500 text-white mt-4 w-2/3 py-2 rounded-md"
      >
        {getButtonText()}
      </button>

   

      <div className="mt-16 w-full px-9 pb-[77px]">
        <div className="flex flex-col gap-[7px]">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-[10px]">
              <div className="pl-[47px] flex items-center gap-[21px]">
                <img src={item.icon} className="size-[34px]" alt="" />
                <div className="flex flex-col">
                  <h5>
                    Balance: {item.balance} {item.short}
                  </h5>
                  <h6 className=" font-extralight">{item.title}</h6>
                </div>
              </div>
              <div className="w-full h-[1px] bg-secondary-600"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
