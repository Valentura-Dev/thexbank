import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoText from '../assets/icons/LogoTextBlack.png';
import bitcoin from '../assets/icons/bitcoin.png';
import ethereum from '../assets/icons/ethereum.png';
import sol from '../assets/icons/sol.png';
import usdt from '../assets/icons/usdt.png';
import eur from '../assets/icons/eur.png';
import gbp from '../assets/icons/gbp.png';

const data = [
  {
    icon: bitcoin,
    title: 'Bitcoin',
    short: 'BTC',
    balance: '0.00',
  },
  {
    title: 'Ethereum',
    icon: ethereum,
    short: 'ETH',
    balance: '0.00',
  },
  {
    title: 'SOL',
    icon: sol,
    short: 'SOL',
    balance: '0.00',
  },
  {
    title: 'USDT',
    icon: usdt,
    short: 'USDT',
    balance: '0.00',
  },
  {
    title: 'EUR',
    icon: eur,
    short: 'EUR',
    balance: '0.00',
  },
  {
    title: 'GBP',
    icon: gbp,
    short: 'GBP',
    balance: '0.00',
  },
];

const Home = () => {
  const [KYC, setKYC] = useState({});
  const [isKYCVerified, setIsKYCVerified] = useState(false);

  useEffect(() => {
    const pureKYC = localStorage.getItem('kyc');
    if (!pureKYC) {
      setIsKYCVerified(false);
      return;
    } else {
      setIsKYCVerified(true);
    }

    const kyc = JSON.parse(pureKYC);
    setKYC(kyc);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img src={LogoText} alt="" className="w-[150px] mt-3" />
      <div className="mt-16 w-full px-9">
        <a href="/verify-kyc">
          <button
            className={
              isKYCVerified
                ? ' bg-accent-700 w-full rounded-[10px] py-[17px]'
                : ' bg-dangerous-700 w-full rounded-[10px] py-[17px]'
            }
          >
            <h4 className="font-bold text-secondary-700">
              {isKYCVerified ? 'KYC (Pending)' : 'Complete Your KYC'}
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
        <button className=" bg-primary-700 flex-1 border-[1px] border-secondary-50 px-[11px] py-[16px] rounded-[10px]">
          <h5 className=" text-secondary-700">Add Money</h5>
        </button>
        <a href="/exchange">
          <button className=" border-[1px] flex-1 border-primary-700 px-[11px] py-[16px] rounded-[10px]">
            <h5 className=" text-primary-700">Exchange</h5>
          </button>
        </a>
        <button className=" bg-primary-700 flex-1 border-[1px] border-secondary-50 px-[11px] py-[16px] rounded-[10px]">
          <h5 className=" text-secondary-700">Send</h5>
        </button>
      </div>
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
