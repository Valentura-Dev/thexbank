import LogoText from '../assets/icons/LogoTextBlack.png';
import bitcoin from '../assets/icons/bitcoin.png';
import ethereum from '../assets/icons/ethereum.png';
import sol from '../assets/icons/sol.png';
import usdt from '../assets/icons/usdt.png';
import eur from '../assets/icons/eur.png';
import gbp from '../assets/icons/gbp.png';
import { useState } from 'react';

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

export default function Exchange() {
  const [selectedAsset, setSelectedAsset] = useState('');

  function submit() {
    console.log('submit');
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex justify-center items-center">
        <a
          href="/dashboard"
        >
          <img src={LogoText} alt="" className=" w-[150px] mt-3" />
        </a>
      </div>
      <div className="flex-1 w-full flex items-center">
        <div className="flex flex-col gap-[93px] w-full">
          <div className="flex justify-center items-center w-full">
            <h3 className="font-bold">Choose asset to receive</h3>
          </div>
          <div className="pl-[14px] pr-[44px]">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                <div className="pl-[44px] flex justify-between items-center ">
                  <div className="flex items-center gap-[21px] ">
                    <img src={item.icon} className="size-[34px]" alt="" />
                    <div className="flex flex-col">
                      <h5>
                        Balance: {item.balance} {item.short}
                      </h5>
                      <h6 className=" font-extralight">{item.title}</h6>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-2">
                    <input
                      onClick={() => setSelectedAsset(item.short)}
                      className="size-[27px]"
                      type="radio"
                      name="asset"
                      value={item.short}
                    />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-secondary-600"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 px-[30px] pb-[94px]">
        <button
          className={
            'w-full bg-primary-700 border-[1px] border-secondary-50 rounded-[10px]'
          }
        >
          <h5
            onClick={submit}
            className=" text-secondary-700 pt-[13px] pb-[16px]"
          >
            Submit
          </h5>
        </button>
        <button className="w-full bg-secondary-700">
          <h5 className=" text-primary-700 pt-[13px]">Need support?</h5>
        </button>
      </div>
    </div>
  );
}
