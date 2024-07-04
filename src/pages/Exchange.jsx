import LogoText from "../assets/icons/LogoTextBlack.png";
import BackIcon from "../assets/icons/backBlack.svg";
import bitcoin from "../assets/icons/bitcoin.png";
import ethereum from "../assets/icons/ethereum.png";
import sol from "../assets/icons/sol.png";
import usdt from "../assets/icons/usdt.png";
import eur from "../assets/icons/eur.png";
import gbp from "../assets/icons/gbp.png";
import arrowDown from "../assets/icons/arrowDown.svg";
import _switch from "../assets/icons/switch.png";
import { useEffect, useState } from "react";

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

function Currency({ type, currecyName, setNewCurrency, price }) {
  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const c = data.find((currency) => currency.short === currecyName);
    setSelectedCurrency(c);
  }, [currecyName]);

  return (
    <div className="w-full bg-primary-900 border-[1px] border-[#BDBDBD] rounded-lg flex justify-between items-center px-4 py-2">
      <div className="flex flex-col">
        <h6 className="family-roboto">{type === "from" ? "From" : "To"}</h6>
        <span className="text-[14px] family-roboto">{price}</span>
      </div>
      <div className="relative">
        <div
          className={[
            "absolute mt-8 -translate-x-3 z-10 overflow-y-auto flex flex-col gap-1 bg-primary-800 rounded-xl transition-all duration-300",
            isOpen ? "max-h-36 p-2" : "max-h-0 p-0",
          ].join(" ")}
        >
          {data.map((currency, index) => {
            const isSelected = selectedCurrency?.short === currency.short;

            return (
              <div
                onClick={() => {
                  setNewCurrency(currency.short);
                  setIsOpen(false);
                }}
                key={index}
                className={[
                  "flex items-center gap-[6px] pl-3 pr-8 py-2 rounded-lg ",
                  isSelected
                    ? "bg-primary-700 cursor-not-allowed"
                    : "bg-primary-900 cursor-pointer",
                ].join(" ")}
              >
                <img src={currency.icon || ""} className="size-[21px]" alt="" />
                <h5 className="family-poppins font-semibold">
                  {currency.short}
                </h5>
              </div>
            );
          })}
        </div>
        <div
          className="flex items-center gap-[6px] cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={selectedCurrency?.icon || ""}
            className="size-[21px]"
            alt=""
          />
          <span className="text-[14px] family-poppins font-semibold">
            {selectedCurrency.short}
          </span>
          <div className="size-6 flex justify-center items-center">
            <img src={arrowDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Exchange() {
  const [firstCurrency, setFirstCurrency] = useState("SOL");
  const [secondCurrency, setSecondCurrency] = useState("EUR");

  function switchCurrency() {
    const tempSecondCurrency = secondCurrency;
    setSecondCurrency(firstCurrency);
    setFirstCurrency(tempSecondCurrency);
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex justify-between items-center mt-3">
        <a href="/dashboard">
          <img src={BackIcon} alt="" className="cursor-pointer ml-[6px]" />
        </a>
        <img src={LogoText} alt="" className=" w-[150px]" />
        <div className="w-12"></div>
      </div>
      <div className="flex-1 w-full flex flex-col items-center pt-[45px]">
        <h3 className="font-bold">Exchange</h3>
        <img src="/logo.svg" className="size-[132px] mt-2" alt="" />
        <div className="pt-[46px] w-full px-9 flex flex-col items-center gap-4">
          <Currency
            type="from"
            currecyName={firstCurrency}
            setNewCurrency={setFirstCurrency}
            price={1.24}
          />
          <img
            src={_switch}
            alt=""
            className="size-10 cursor-pointer"
            onClick={switchCurrency}
          />
          <Currency
            type="to"
            currecyName={secondCurrency}
            setNewCurrency={setSecondCurrency}
            price={155.57}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 pt-6 px-[30px] pb-[89px]">
        <button className="w-full bg-primary-900 border-[1px] border-secondary-50 rounded-[10px] transition-all duration-300">
          <h5 className=" text-secondary-700 pt-[13px] pb-[16px]">Continue</h5>
        </button>
        <button className="w-full bg-secondary-700">
          <h5 className=" text-primary-700 pt-[13px]">Cancel</h5>
        </button>
      </div>
    </div>
  );
}
