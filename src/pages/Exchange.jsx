import LogoText from "../assets/icons/LogoTextBlack.png";
import BackIcon from "../assets/icons/backBlack.svg";
import bitcoin from "../assets/icons/bitcoin.png";
import ethereum from "../assets/icons/ethereum.png";
import sol from "../assets/icons/sol.png";
import usdt from "../assets/icons/usdt.png";
import eur from "../assets/icons/eur.png";
import gbp from "../assets/icons/gbp.png";
import xrp from "../assets/icons/xrp.png";
import avax from "../assets/icons/avax.png";
import sui from "../assets/icons/sui.png";
import arrowDown from "../assets/icons/arrowDown.svg";
import _switch from "../assets/icons/switch.png";
import { useEffect, useState } from "react";
import axios from "axios";

const data = [
  { icon: bitcoin, title: "Bitcoin", short: "BTC", balance: "0.00" },
  { title: "Ethereum", icon: ethereum, short: "ETH", balance: "0.00" },
  { title: "SOL", icon: sol, short: "SOL", balance: "0.00" },
  { title: "USDT", icon: usdt, short: "USDT", balance: "0.00" },
  { title: "EUR", icon: eur, short: "EUR", balance: "0.00" },
  { title: "GBP", icon: gbp, short: "GBP", balance: "0.00" },
  { title: "XRP", icon: xrp, short: "XRP", balance: "0.00" },
  { title: "Avalanche", icon: avax, short: "AVAX", balance: "0.00" },
  { title: "Sui", icon: sui, short: "SUI", balance: "0.00" },
];

// Currency Component
function Currency({
  type,
  currencyName,
  setNewCurrency,
  price,
  onInputChange,
  userInput,
}) {
  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const c = data.find((currency) => currency.short === currencyName);
    setSelectedCurrency(c);
  }, [currencyName]);

  return (
    <div className="w-full bg-primary-900 border-[1px] border-[#BDBDBD] rounded-lg flex justify-between items-center px-4 py-2">
      <div className="flex flex-col">
        <h6 className="family-roboto">{type === "from" ? "From" : "To"}</h6>
        {type === "from" ? (
          <input
            type="number"
            className="text-[14px] family-roboto bg-transparent border-none outline-none"
            value={userInput}
            onChange={onInputChange}
          />
        ) : (
          <span className="text-[14px] family-roboto">{price.toFixed(6)}</span>
        )}
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
  const [firstCurrency, setFirstCurrency] = useState("BTC");
  const [secondCurrency, setSecondCurrency] = useState("USDT");
  const [prices, setPrices] = useState({
    BTC: 58260,
    ETH: 2466.38,
    SOL: 134.45,
    USDT: 1.001,
    EUR: 1 / 0.9,
    GBP: 1 / 0.76,
    XRP: 0.5,
    AVAX: 35,
    SUI: 1.5,
  });
  const [inputValue, setInputValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(0);

  const fetchPrices = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,tether,ripple,avalanche-2,sui&vs_currencies=usd"
      );
      const priceData = response.data;
      setPrices({
        BTC: priceData.bitcoin.usd,
        ETH: priceData.ethereum.usd,
        SOL: priceData.solana.usd,
        USDT: priceData.tether.usd,
        EUR: 1 / 0.9,
        GBP: 1 / 0.76,
        XRP: priceData.ripple.usd,
        AVAX: priceData["avalanche-2"].usd,
        SUI: priceData.sui.usd,
      });
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update prices every minute
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    calculateConversion(e.target.value);
  };

  const calculateConversion = (input) => {
    const fromPrice = prices[firstCurrency];
    const toPrice = prices[secondCurrency];
    if (fromPrice && toPrice) {
      const conversion = (input * fromPrice) / toPrice;
      setConvertedValue(conversion);
    } else {
      setConvertedValue(0);
    }
  };

  function switchCurrency() {
    const tempSecondCurrency = secondCurrency;
    setSecondCurrency(firstCurrency);
    setFirstCurrency(tempSecondCurrency);
    calculateConversion(inputValue);
  }

  useEffect(() => {
    calculateConversion(inputValue);
  }, [firstCurrency, secondCurrency, prices]);

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
            currencyName={firstCurrency}
            setNewCurrency={setFirstCurrency}
            price={prices[firstCurrency]}
            userInput={inputValue}
            onInputChange={handleInputChange}
          />
          <img
            src={_switch}
            alt=""
            className="size-10 cursor-pointer"
            onClick={switchCurrency}
          />
          <Currency
            type="to"
            currencyName={secondCurrency}
            setNewCurrency={setSecondCurrency}
            price={convertedValue}
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
