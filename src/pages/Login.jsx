import { useEffect, useRef, useState } from 'react';
import LogoIcon from '../assets/icons/LogoIcon.svg';
import BackIcon from '../assets/icons/back.svg';
import LogoText from '../assets/icons/LogoText.png';
import { SignUp, SignIn, Verification } from '../components';

const Login = () => {
  const authComponent = useRef(null);
  const signup = useRef(null);
  const signin = useRef(null);
  const verification = useRef(null);
  const header = useRef(null);

  const [page, setPage] = useState('loginHome');

  useEffect(() => {
    authComponent.current.classList.remove('translate-y-full');
  }, [authComponent]);

  function routeSignUp() {
    setPage('signUp');

    authComponent.current.classList.add('translate-y-full');
    setTimeout(() => {
      authComponent.current.classList.remove('flex');
      authComponent.current.classList.add('hidden');

      signup.current.classList.remove('hidden');
      signup.current.classList.add('flex');

      setTimeout(() => {
        signup.current.classList.remove('translate-y-full');
      }, 20);

      setTimeout(() => {
        header.current.classList.remove('hidden');
        header.current.classList.add('flex');
        header.current.classList.add('opacity-0');
        setTimeout(() => {
          header.current.classList.remove('opacity-0');
          header.current.classList.add('opacity-100');
        }, 100);
      }, 300);
    }, 750);
  }

  function routeSignUpToBack() {
    setPage('loginHome');
    signup.current.classList.add('translate-y-full');
    header.current.classList.add('opacity-0');
    setTimeout(() => {
      header.current.classList.remove('opacity-100');
      header.current.classList.add('opacity-0');
      header.current.classList.add('absolute');

      setTimeout(() => {
        header.current.classList.remove('flex');
        header.current.classList.remove('absolute');
        header.current.classList.add('hidden');
      }, 500);
    }, 100);
    setTimeout(() => {
      signup.current.classList.remove('flex');
      signup.current.classList.add('hidden');

      authComponent.current.classList.remove('hidden');
      authComponent.current.classList.add('flex');

      setTimeout(() => {
        authComponent.current.classList.remove('translate-y-full');
      }, 20);
    }, 750);
  }

  function routeSignIn() {
    setPage('signIn');

    authComponent.current.classList.add('translate-y-full');
    setTimeout(() => {
      authComponent.current.classList.remove('flex');
      authComponent.current.classList.add('hidden');

      signin.current.classList.remove('hidden');
      signin.current.classList.add('flex');

      setTimeout(() => {
        signin.current.classList.remove('translate-y-full');
      }, 20);

      setTimeout(() => {
        header.current.classList.remove('hidden');
        header.current.classList.add('flex');
        header.current.classList.add('opacity-0');
        setTimeout(() => {
          header.current.classList.remove('opacity-0');
          header.current.classList.add('opacity-100');
        }, 100);
      }, 300);
    }, 750);
  }

  function routeSignInToBack() {
    setPage('loginHome');
    signin.current.classList.add('translate-y-full');
    header.current.classList.add('opacity-0');
    setTimeout(() => {
      header.current.classList.remove('opacity-100');
      header.current.classList.add('opacity-0');
      header.current.classList.add('absolute');

      setTimeout(() => {
        header.current.classList.remove('flex');
        header.current.classList.remove('absolute');
        header.current.classList.add('hidden');
      }, 500);
    }, 100);
    setTimeout(() => {
      signin.current.classList.remove('flex');
      signin.current.classList.add('hidden');

      authComponent.current.classList.remove('hidden');
      authComponent.current.classList.add('flex');

      setTimeout(() => {
        authComponent.current.classList.remove('translate-y-full');
      }, 20);
    }, 750);
  }

  function routeVerification() {
    const from = page;
    setPage('verification');
    if (from === 'signUp') {
      signup.current.classList.add('translate-y-full');
      setTimeout(() => {
        signup.current.classList.remove('flex');
        signup.current.classList.add('hidden');
      }, 750);
    } else if (from === 'signIn') {
      signin.current.classList.add('translate-y-full');
      setTimeout(() => {
        signin.current.classList.remove('flex');
        signin.current.classList.add('hidden');
      }, 750);
    }

    setTimeout(() => {
      verification.current.classList.remove('hidden');
      verification.current.classList.add('flex');

      setTimeout(() => {
        verification.current.classList.remove('translate-y-full');
      }, 20);
    }, 750);
  }

  function routeVerificationToBack() {
    setPage('loginHome');
    verification.current.classList.add('translate-y-full');
    header.current.classList.add('opacity-0');
    setTimeout(() => {
      header.current.classList.remove('opacity-100');
      header.current.classList.add('opacity-0');
      header.current.classList.add('absolute');

      setTimeout(() => {
        header.current.classList.remove('flex');
        header.current.classList.remove('absolute');
        header.current.classList.add('hidden');
      }, 500);
    }, 100);
    setTimeout(() => {
      verification.current.classList.remove('flex');
      verification.current.classList.add('hidden');

      authComponent.current.classList.remove('hidden');
      authComponent.current.classList.add('flex');

      setTimeout(() => {
        authComponent.current.classList.remove('translate-y-full');
      }, 20);
    }, 750);
  }

  function onSubmit(data) {
    routeVerification();
  }

  return (
    <div className=" bg-secondary-200 w-full min-h-dvh flex flex-col gap-6">
      <div
        ref={authComponent}
        className="absolute transition-all ease-in-out duration-700 translate-y-full w-full flex flex-col gap-4 items-center rounded-t-[60px] bg-secondary-700 bottom-0 px-[30px] pb-[44px] pt-[37px]"
      >
        <button
          onClick={routeSignUp}
          className="w-full bg-primary-900 border-[1px] border-secondary-50 rounded-[10px]"
        >
          <h5 className=" text-secondary-700 pt-[13px] pb-[16px]">
            Create Account
          </h5>
        </button>
        <button
          onClick={routeSignIn}
          className="w-full bg-secondary-700 border-[1px] border-primary-700 rounded-[10px]"
        >
          <h5 className=" text-primary-700 pt-[13px] pb-[16px]">Sign in</h5>
        </button>
      </div>

      <div
        ref={signup}
        className="absolute hidden h-[calc(100dvh-82px)] transition-all ease-in-out duration-700 translate-y-full w-full rounded-t-[60px] bg-secondary-700 bottom-0"
      >
        <SignUp onSubmit={onSubmit} />
      </div>

      <div
        ref={signin}
        className="absolute hidden h-[calc(100dvh-82px)] transition-all ease-in-out duration-700 translate-y-full w-full rounded-t-[60px] bg-secondary-700 bottom-0"
      >
        <SignIn onSubmit={onSubmit} />
      </div>

      <div
        ref={verification}
        className="absolute hidden h-[calc(100dvh-129px)] transition-all ease-in-out duration-700 translate-y-full w-full rounded-t-[60px] bg-secondary-700 bottom-0"
      >
        <Verification />
      </div>

      <div
        ref={header}
        className="hidden transition-all duration-700 justify-between w-full items-center pt-3"
      >
        <img
          onClick={
            {
              signUp: routeSignUpToBack,
              signIn: routeSignInToBack,
              verification: routeVerificationToBack,
            }[page]
          }
          src={BackIcon}
          alt=""
          className="cursor-pointer ml-[6px]"
        />
        <img src={LogoText} alt="" className="w-[150px] object-contain mr-7" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full flex-1">
        <img src={LogoIcon} alt="" className=" w-[120px] sm:w-[200px]" />
        <img src={LogoText} alt="" className=" w-[220px] sm:w-[350px]" />
      </div>
    </div>
  );
};

export default Login;
