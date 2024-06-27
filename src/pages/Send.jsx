import LogoText from '../assets/icons/LogoTextBlack.png';
import BackIcon from '../assets/icons/backBlack.svg';
import chevron from '../assets/icons/chevron.svg';
import bitcoin from '../assets/icons/bitcoin.png';
import ethereum from '../assets/icons/ethereum.png';
import sol from '../assets/icons/solCountry.png';
import usdt from '../assets/icons/usdt.png';
import eur from '../assets/icons/eur.png';
import gbp from '../assets/icons/gbp.png';
import aud from '../assets/icons/aud.png';
import cad from '../assets/icons/cad.png';
import jpy from '../assets/icons/jpy.png';
import _try from '../assets/icons/try.png';
import arrowRight from '../assets/icons/arrowRight.svg';
import { useRef, useState, useEffect } from 'react';
import { data } from 'autoprefixer';

const ChooseSendWay = ({ onSubmit }) => {
  const [selectedSendWay, setSelectedSendWay] = useState('');

  function submit() {
    if (selectedSendWay !== '') onSubmit(selectedSendWay);
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
      <div className="flex-1 w-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h3 className="font-bold">How to send money</h3>
          <img src="/logo.svg" className="size-[132px] mt-4" alt="" />
          <div className="mt-12 flex flex-col gap-3 w-dvw">
            {[
              {
                title: 'Send Crypto',
                description: 'Send cryptocurrency',
              },
              {
                title: 'Internal Transfer',
                description: 'Transfer within app',
              },
              {
                title: 'Local Payouts',
                description: 'Send local bank',
              },
            ].map((item, index) => (
              <div className="w-full pr-12 pl-3 flex flex-col gap-[10px]">
                <div
                  onClick={() => setSelectedSendWay(item.title)}
                  className={[
                    'px-4 flex group justify-between cursor-pointer transition-all duration-500 rounded-lg hover:bg-secondary-600',
                    selectedSendWay === item.title ? 'bg-secondary-600' : '',
                  ].join(' ')}
                >
                  <div className="flex flex-col">
                    <h5 className="text-secondary-100">{item.title}</h5>
                    <h6 className=" font-extralight text-secondary-100">
                      {item.description}
                    </h6>
                  </div>
                  <img
                    className={[
                      ' transition-all duration-500 ',
                      selectedSendWay === item.title
                        ? 'rotate-180'
                        : 'group-hover:rotate-180',
                    ].join(' ')}
                    src={arrowRight}
                    alt=""
                  />
                </div>
                <div className="w-full bg-secondary-600 h-[1px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 pt-4 px-[30px] pb-[94px]">
        <button
          className={[
            'w-full border-[1px] border-secondary-50 rounded-[10px] transition-all duration-300',
            selectedSendWay === ''
              ? 'bg-primary-disabled cursor-default'
              : 'bg-primary-900',
          ].join(' ')}
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

const localPayoutCurrencies = [
  {
    short: 'EUR',
    icon: eur,
    prefix: '€',
    balance: '102.40',
  },
  {
    short: 'GBP',
    icon: gbp,
    prefix: '£',
    balance: '341.62',
  },
  {
    short: 'SOL',
    icon: sol,
    prefix: '$',
    balance: '92.34',
  },
  {
    short: 'AUD',
    icon: aud,
    prefix: 'A$',
    balance: '612.76',
  },
  {
    short: 'CAD',
    icon: cad,
    prefix: 'C$',
    balance: '123.45',
  },
  {
    short: 'JPY',
    icon: jpy,
    prefix: '¥',
    balance: '123.45',
  },
  {
    short: 'TRY',
    icon: _try,
    prefix: '₺',
    balance: '123.45',
  },
];

const LocalPayouts = ({ backToChooseSendWay, onSubmit }) => {
  const [selectedLocalPayoutCurrency, setSelectedLocalPayoutCurrency] =
    useState('');

  function submit() {
    if (selectedLocalPayoutCurrency !== '') {
      onSubmit({
        currency: selectedLocalPayoutCurrency,
        page: 'local-payouts-checkout',
      });
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <img
          onClick={backToChooseSendWay}
          src={BackIcon}
          alt=""
          className="cursor-pointer ml-[6px]"
        />
        <div className="w-12"></div>
      </div>
      <div className="flex-1 w-full flex flex-col">
        <div className="flex flex-col items-center">
          <h5>Local Payouts</h5>
          <img src="/logo.svg" alt="" className="size-[132px]" />
        </div>
        <div className="flex flex-col pt-6">
          <div className="px-12 flex flex-col gap-3">
            <span className="text-[14px] font-bold">
              Choose a currency to send:
            </span>
            <span className="text-[12px] font-extralight">
              If no selection is made, a new currency account will be created
              automatically.
            </span>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          {localPayoutCurrencies.map((item, index) => {
            return (
              <div className="px-8">
                <div
                  onClick={() => setSelectedLocalPayoutCurrency(item.short)}
                  className={[
                    'w-full flex',
                    selectedLocalPayoutCurrency === item.short
                      ? 'bg-primary-800 bg-opacity-10 rounded-[10px] border-[1px] border-secondary-100'
                      : 'border-b-[1px] cursor-pointer border-secondary-600',
                  ].join(' ')}
                >
                  <div className="py-2 px-4 xs:px-10 flex items-center gap-6">
                    <img src={item.icon} className="size-[34px]" alt="" />
                    <div className="flex flex-col">
                      <h5>
                        Balance: {item.prefix}
                        {item.balance}
                      </h5>
                      <h6 className=" font-extralight">{item.short}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-center mt-3">
            <button>
              <h5 className="underline text-[#9C9C9C]">More</h5>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 pt-6 px-[30px] pb-10">
        <button
          className={[
            'w-full border-[1px] border-secondary-50 rounded-[10px] transition-all duration-300',
            selectedLocalPayoutCurrency === ''
              ? 'bg-primary-disabled cursor-default'
              : 'bg-primary-900',
          ].join(' ')}
        >
          <h5
            onClick={submit}
            className=" text-secondary-700 pt-[13px] pb-[16px]"
          >
            Continue
          </h5>
        </button>
        <button
          onClick={backToChooseSendWay}
          className="w-full bg-secondary-700"
        >
          <h5 className=" text-primary-700 pt-[13px]">Cancel</h5>
        </button>
      </div>
    </>
  );
};

const LocalPayoutSelectBox = ({ selected, setNewCurrency }) => {
  const [current, setCurrent] = useState({});
  const list = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrent(
      localPayoutCurrencies.find((item) => item.short === selected) ||
        localPayoutCurrencies[0]
    );
  });

  function listToggle() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="px-7">
      <div
        onClick={listToggle}
        className="w-full flex items-center justify-between border-b-[1px] cursor-pointer border-secondary-600"
      >
        <div className="py-2 flex items-center gap-2">
          <img src={current.icon} className="size-[34px]" alt="" />
          <h5>
            Balance: {current.prefix}
            {current.balance}
          </h5>
        </div>
        <div>
          <img src={chevron} alt="" className="pr-4" />
        </div>
      </div>

      <div
        ref={list}
        className={
          ["flex flex-col transition-all duration-300 absolute w-[calc(100dvw-56px)] overflow-y-auto bg-secondary-700",
          isOpen ? 'border-2 border-neutral-400 rounded-lg p-2 mt-2 max-h-[166px]' : 'max-h-[0px]'
          ].join(' ')
        }
      >
        {localPayoutCurrencies.map((item, index) => {
          return (
            <>
              <div
                onClick={() => {
                  setNewCurrency(item.short);
                  listToggle();
                }}
                className={[
                  'w-full flex items-center justify-between cursor-pointer',
                  current.short === item.short
                    ? 'bg-primary-800 bg-opacity-10 rounded-[10px] border-[1px] border-secondary-100'
                    : 'border-b-[1px] border-secondary-600',
                ].join(' ')}
              >
                <div className="py-2 flex items-center gap-2">
                  <img src={item.icon} className="size-[34px]" alt="" />
                  <h5>
                    Balance: {item.prefix}
                    {item.balance}
                  </h5>
                </div>
              </div>
              <div className="w-full h-[1px] bg-secondary-600"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const LocalPayoutsCheckout = ({
  currency,
  backToChooseSendWay,
  onSubmit,
  setNewCurrency,
}) => {
  const [selectedLocalPayoutCurrency, setSelectedLocalPayoutCurrency] =
    useState('');
  const country = useRef(null);
  const recipientName = useRef(null);
  const recipientIBAN = useRef(null);
  const [isValid, setIsValid] = useState(false);

  function checkIsValid() {
    if (
      country.current.validity.valid &&
      recipientName.current.validity.valid &&
      recipientIBAN.current.validity.valid
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function submit() {
    if (selectedLocalPayoutCurrency !== '') {
      onSubmit({
        currency: selectedLocalPayoutCurrency,
        page: 'local-payouts-checkout',
      });
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mt-3">
        <img
          onClick={backToChooseSendWay}
          src={BackIcon}
          alt=""
          className="cursor-pointer ml-[6px]"
        />
        <div className="w-12"></div>
      </div>
      <div className="flex-1 w-full flex flex-col">
        <div className="flex flex-col items-center">
          <h5>Local Payouts</h5>
          <img src="/logo.svg" alt="" className="size-[132px]" />
        </div>
        <div className="flex flex-col pt-6">
          <LocalPayoutSelectBox
            selected={currency}
            setNewCurrency={setNewCurrency}
          />
          <div className="flex flex-col gap-1 pt-16">
            <div className="flex justify-center items-center">
              <h5>Details</h5>
            </div>
            <div className="flex flex-col px-7">
              <input
                onChange={checkIsValid}
                ref={country}
                type="text"
                required
                placeholder="Country"
              />
              <div className="w-full h-[1px] mt-2 mb-3 bg-secondary-600"></div>
              <input
                onChange={checkIsValid}
                ref={recipientName}
                type="text"
                required
                placeholder="Recipient Name"
              />
              <div className="w-full h-[1px] mt-2 mb-3 bg-secondary-600"></div>
              <input
                onChange={checkIsValid}
                ref={recipientIBAN}
                type="text"
                required
                placeholder="Recipient IBAN"
              />
              <div className="w-full h-[1px] mt-2 mb-3 bg-secondary-600"></div>
              <div className="flex justify-between">
                <h5>Flat fee</h5>
                <h5>€2.00</h5>
              </div>
              <div className="w-full h-[1px] mt-2 mb-3 bg-secondary-600"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 pt-6 px-[30px] pb-10">
        <button
          className={[
            'w-full border-[1px] border-primary-700 rounded-[10px] transition-all duration-300',
            !isValid ? 'bg-primary-disabled cursor-default' : ' brightness-115',
          ].join(' ')}
        >
          <h5
            onClick={submit}
            className={
              [" pt-[13px] pb-[16px]", 
              isValid ? 'text-primary-700' : 'text-secondary-500'
              ].join(' ')
            }
          >
            Proceed to checkout
          </h5>
        </button>
        <button
          onClick={backToChooseSendWay}
          className="w-full bg-secondary-700"
        >
          <h5 className=" text-primary-700 pt-[13px]">Cancel</h5>
        </button>
      </div>
    </>
  );
};

export default function Send() {
  const [page, setPage] = useState('choose-send-way');
  const [selectedSendWay, setSelectedSendWay] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');

  function onSubmit(data) {
    setSelectedSendWay(data);
    setPage(data);
  }

  function moveInLocalPayouts(data) {
    setSelectedCurrency(data.currency);
    setPage(data.page);
  }

  function backToChooseSendWay() {
    setPage('choose-send-way');
  }

  function setNewCurrency(currency) {
    setSelectedCurrency(currency);
  }

  return (
    <div className="flex flex-col min-h-dvh">
      {page === 'choose-send-way' && <ChooseSendWay onSubmit={onSubmit} />}
      {page === 'Local Payouts' && (
        <LocalPayouts
          backToChooseSendWay={backToChooseSendWay}
          onSubmit={moveInLocalPayouts}
        />
      )}
      {page === 'local-payouts-checkout' && (
        <LocalPayoutsCheckout
          currency={selectedCurrency}
          backToChooseSendWay={backToChooseSendWay}
          onSubmit={(data) => console.log(data)}
          setNewCurrency={setNewCurrency}
        />
      )}
    </div>
  );
}
