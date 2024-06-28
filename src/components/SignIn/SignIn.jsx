import React, { useEffect, useRef, useState } from 'react';

export default function SignIn({ onSubmit }) {
  const email = useRef(null);
  const password = useRef(null);
  const form = useRef(null);
  const signin = useRef(null);

  const [isValid, setIsValid] = useState(false);

  function onChange(e) {
    if (email.current.validity.valid && password.current.validity.valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function submit(e) {
    e?.preventDefault();
    if (isValid)

      fetch('https://dev.thexbank.io/api/users/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            onChange('');
            signin.current.innerHTML = 'Invalid credentials';
            setTimeout(() => {
              signin.current.innerHTML = 'Next';
            }, 3000);
          } else {
            localStorage.setItem('email', email.current.value);
            localStorage.setItem('password', password.current.value);
            onSubmit({
              from: 'signin',
              email: email.current.value,
              password: password.current.value,
            });
          }
        });
  }

  useEffect(() => {
    onChange();
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-between items-center px-[30px] pt-[47px] pb-[64px]">
      <div className="w-full flex flex-col items-center flex-1">
        <h3 className="font-bold">Sign in</h3>
        <form
          ref={form}
          onChange={onChange}
          onSubmit={submit}
          className="mt-[60px] flex flex-col w-full gap-[34px] flex-1 justify-center"
        >
          <input
            type="email"
            ref={email}
            placeholder="Email"
            required
            className="w-full border-b-[1px] outline-none border-secondary-600 pb-[9px]"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            required
            minLength={6}
            className="w-full border-b-[1px] outline-none border-secondary-600 pb-[9px]"
          />
        </form>
      </div>
      <div className="flex flex-col w-full gap-3">
        <button
          className={
            isValid
              ? 'w-full bg-primary-700 border-[1px] border-secondary-50 rounded-[10px]'
              : 'w-full bg-primary-disabled border-[1px] border-secondary-50 rounded-[10px]'
          }
        >
          <h5
            onClick={submit}
            ref={signin}
            className=" text-secondary-700 pt-[13px] pb-[16px]"
          >
            {isValid ? 'Sign in' : 'Next'}
          </h5>
        </button>
        <button className="w-full bg-secondary-700">
          <h5 className=" text-primary-700 pt-[13px] pb-[16px]">
            Need support?
          </h5>
        </button>
      </div>
    </div>
  );
}
