import React, { useEffect, useRef, useState } from 'react';
import { json } from 'react-router-dom';

export default function SignUp({ onSubmit }) {
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phoneNumber = useRef(null);
  const form = useRef(null);
  const signup = useRef(null);

  const [isValid, setIsValid] = useState(false);

  function onChange(e) {
    if (
      fullName.current.validity.valid &&
      email.current.validity.valid &&
      password.current.validity.valid &&
      phoneNumber.current.validity.valid
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function parseFullName(fullName) {
    let nameParts = fullName.trim().split(' ');
    if (nameParts.length === 0) {
      return { name: '', surname: '' };
    }

    if (nameParts.length === 1) {
      return { name: nameParts[0], surname: '' };
    }

    let surname = nameParts.pop();
    let name = nameParts.join(' ');

    return { name, surname };
  }

  function submit(e) {
    e?.preventDefault();
    if (isValid) {
      const { name, surname } = parseFullName(fullName.current.value);
      console.log(
        'body',
        JSON.stringify({
          name: name,
          surname: surname,
          email: email.current.value,
          password: password.current.value,
          phone: phoneNumber.current.value,
        })
      );
      fetch('https://dev.thexbank.io/api/users/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email.current.value,
          password: password.current.value,
          phone: phoneNumber.current.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            signup.current.innerText = 'Invalid inputs';
            setTimeout(() => {
              signup.current.innerText = 'Sign up';
            }, 2000);
          } else {
            localStorage.setItem('email', email.current.value);
            localStorage.setItem('password', password.current.value);
            onSubmit({
              from: 'signup',
              fullName: fullName.current.value,
              email: email.current.value,
              password: password.current.value,
              phoneNumber: phoneNumber.current.value,
            });
          }
        });
    }
  }

  useEffect(() => {
    onChange();
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-between items-center px-[30px] pt-[47px] pb-[64px]">
      <div className="w-full flex flex-col items-center">
        <h3 className="font-bold">Create Account</h3>
        <form
          ref={form}
          onChange={onChange}
          onSubmit={submit}
          className="mt-[60px] flex flex-col w-full gap-[34px]"
        >
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            required
            minLength={3}
            className="w-full border-b-[1px] outline-none border-secondary-600 pb-[9px]"
          />
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
          <input
            placeholder="Phone Number"
            ref={phoneNumber}
            type="tel"
            required
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
          ref={signup}
            onClick={submit}
            className=" text-secondary-700 pt-[13px] pb-[16px]"
          >
            {isValid ? 'Sign up' : 'Next'}
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
