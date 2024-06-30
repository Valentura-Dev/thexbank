import LogoText from '../assets/icons/LogoTextBlack.png';
import BackIcon from '../assets/icons/backBlack.svg';
import bitcoin from '../assets/icons/bitcoin.png';
import ethereum from '../assets/icons/ethereum.png';
import sol from '../assets/icons/sol.png';
import usdt from '../assets/icons/usdt.png';
import eur from '../assets/icons/eur.png';
import gbp from '../assets/icons/gbp.png';
import { useRef, useState } from 'react';

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

const ChooseAsset = ({ onSubmit }) => {
  const [selectedAsset, setSelectedAsset] = useState('');

  function submit() {
    if (selectedAsset !== '') onSubmit(selectedAsset);
  }

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <a href="/dashboard">
          <img src={BackIcon} alt="" className="cursor-pointer ml-[6px]" />
        </a>
        <img src={LogoText} alt="" className=" w-[150px]" />
        <div className="w-12"></div>
      </div>
      <div className="flex-1 w-full flex items-center">
        <div className="flex flex-col gap-[93px] w-full">
          <div className="flex justify-center items-center w-full">
            <h3 className="font-bold">Choose asset to receive</h3>
          </div>
          <div className="pl-[14px] pr-[44px]">
            {data.map((item, index) => {
              const input = useRef(null);

              return (
                <div key={index} className="flex flex-col gap-[10px]">
                  <div
                    onClick={() => input.current.click()}
                    className="pl-[44px] flex justify-between items-center "
                  >
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
                        ref={input}
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
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 pt-4 px-[30px] pb-[94px]">
        <button
          className={
            'w-full bg-primary-700 border-[1px] border-secondary-50 rounded-[10px]'
          }
        >
          <h5
            onClick={submit}
            className=" text-secondary-700 pt-[13px] pb-[16px]"
          >
            Continue
          </h5>
        </button>
        <a href="/dashboard">
        <button className="w-full bg-secondary-700">
          <h5 className=" text-primary-700 pt-[13px]">Cancel</h5>
        </button>
        </a>
      </div>
    </>
  );
};

const QR = ({ asset, backToChooseAsset }) => {
  if (asset !== 'BTC') return <>Currently only bitcoin supporting</>;
  const [code, setCode] = useState(
    '6XHdhax8iuDCZvU4TjWkLcP6fiN2yGBdmq8ruZY3JChY'
  );
  const [isCopied, setIsCopied] = useState(false);

  function copyCode() {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <div onClick={backToChooseAsset}>
          <img src={BackIcon} alt="" className="cursor-pointer ml-[6px]" />
        </div>
        <img src={LogoText} alt="" className=" w-[150px]" />
        <div className="w-12"></div>
      </div>
      <div className="flex-1 w-full flex flex-col items-center pt-[51px]">
        <h3 className="font-bold">Solana Wallet</h3>
        <div className="border-[1px] border-secondary-50 rounded-[20px] mt-9">
          <h3 className="font-bold px-5 py-16">QR Code</h3>
        </div>
        <div className="px-5 pt-9">
          <span className="text-[14px] text-secondary-100 font-light text-center break-all">
            {code}
          </span>
          <div className="flex justify-center pt-6">
            <div
              onClick={copyCode}
              className=" cursor-pointer bg-primary-900 w-fit p-3 rounded-[10px]"
            >
              <span className="text-secondary-700 ">
                {isCopied ? 'Copied' : 'Copy Address'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 pt-4 px-[6px] pb-[80px]">
        <h5 className=" font-light text-center">
          Send only Bitcoin (BTC) to this address. Sending other coins mayresult
          in permanent loss.
        </h5>
        <button onClick={backToChooseAsset} className="w-full bg-secondary-700">
          <h5 className=" text-primary-700 pt-[40px] underline">Back</h5>
        </button>
      </div>
    </>
  );
};

export default function AddMoney() {
  const [page, setPage] = useState('choose-asset');
  const [selectedAsset, setSelectedAsset] = useState('');

  function onSubmit(data) {
    setSelectedAsset(data);
    setPage('qr');
  }

  function backToChooseAsset() {
    setPage('choose-asset');
  }

  return (
    <div className="flex flex-col min-h-dvh">
      {page === 'choose-asset' && <ChooseAsset onSubmit={onSubmit} />}
      {page === 'qr' && (
        <QR asset={selectedAsset} backToChooseAsset={backToChooseAsset} />
      )}
    </div>
  );
}
