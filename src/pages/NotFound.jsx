import './NotFound.module.css';
import background from '../assets/images/NotFoundBackground.png';

const upArrowSVG = (w, h) => (
  <svg
    stroke="currentColor"
    fill="white"
    strokeWidth="0"
    viewBox="0 0 384 512"
    height={`${h}px`}
    width={`${w}px`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
  </svg>
);

const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-secondary-100">
      <div className="h-dvh flex flex-col relative">
        <header className="px-4 sm:px-16 pt-8 flex items-center gap-2 justify-between">
          <img src="/iconOnly.svg" alt="" className=" size-8 sm:size-16" />
          <div className="flex gap-3 sm:gap-12">
            <a
              className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-300"
              href="/"
            >
              <span className=" text-[20px] text-secondary-700 family-roboto">
                Back to Home
              </span>
              <div className="hidden sm:block h-4 w-4 bg-secondary-700 rounded-full"></div>
            </a>
            <a
              className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-300"
              href="#footer"
            >
              <span className=" text-[20px] text-secondary-700 family-roboto">
                See more
              </span>
              <div className="hidden sm:block h-4 w-4 bg-secondary-700 rounded-full"></div>
            </a>
          </div>
        </header>
        <div className=" flex-1">
          <div className="flex h-full justify-center items-center w-full">
            <div className="flex flex-col items-center gap-4">
              <span className="family-roboto leading-[180px] text-[180px] sm:text-[240px] text-secondary-700">
                404
              </span>
              <span className="family-roboto italic text-[16px] text-secondary-700">
                It seems you got a little bit lost
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="px-4 sm:px-16 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-16 min-h-16"
        id="footer"
      >
        <div className="flex-1 col-span-2 flex flex-col justify-between gap-4">
          <span className="text-[32px] sm:text-[40px] family-roboto text-secondary-700">
            hello@valentura.com
          </span>
          <span className="text-[16px] opacity-60 family-roboto text-secondary-700">
            Copyright © 2022 - All Rights Reserved
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[20px] opacity-60 family-roboto text-secondary-700">
            Where we are located?
          </span>
          <div className="flex flex-col">
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//YILDIZ+TEKNIK+TEKNOPARK/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cabae6abebd867:0xcaee7bc81385afcd?sa=X&ved=1t:3061&ictx=111"
              className="text-[16px] opacity-8de0 family-roboto text-secondary-700 hover:underline transition-all duration-300"
            >
              Istanbul, Türkiye
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[20px] opacity-60 family-roboto text-secondary-700">
            Stay tuned
          </span>
          <div className="flex flex-col">
            <a
              target="_blank"
              href="https://www.facebook.com/valenturaa"
              className="text-[16px] opacity-8de0 family-roboto text-secondary-700 hover:underline transition-all duration-300"
            >
              Facebook
            </a>
            <a
              target="_blank"
              href="https://twitter.com/valenturatech"
              className="text-[16px] opacity-8de0 family-roboto text-secondary-700 hover:underline transition-all duration-300"
            >
              Twitter / X
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/valentura/"
              className="text-[16px] opacity-8de0 family-roboto text-secondary-700 hover:underline transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://instagram.com/valenturatech"
              className="text-[16px] opacity-8de0 family-roboto text-secondary-700 hover:underline transition-all duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="col-span-2 xl:col-span-1 flex justify-end">
          <div className="flex flex-col justify-end">
            <div onClick={scrollToTop} className="flex gap-2 group items-center">
              {upArrowSVG(24, 24)}
              <span className="text-[20px] opacity-8de0 family-roboto text-secondary-700 group-hover:underline transition-all duration-300">
                Back to top
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
