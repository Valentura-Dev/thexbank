import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import deleteIcon from '../../assets/icons/delete.svg';
import { useState } from 'react';

export default function Verification() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  function addNumber(number) {
    if (otp.length < 4) {
      onChange(otp + number);
    }
  }

  function removeOneNumber() {
    onChange(otp.slice(0, -1));
  }

  function onChange(newOtp) {
    setOtp(newOtp);
    if (newOtp.length === 4) {
      console.log('OTP:', newOtp);
      localStorage.setItem('token', newOtp);
      navigate('/dashboard');
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-between pt-[74px]">
      <div className="flex flex-col items-center">
        <h3 className="font-bold">Verification Code</h3>
        <div className="mt-[33px]">
          <OtpInput
            value={otp}
            onChange={onChange}
            numInputs={4}
            renderSeparator={<div className="w-[11px]" />}
            inputStyle={{
              backgroundColor: '#e3ebee',
              fontSize: '40px',
              lineHeight: '48px',
              padding: '16px',
              width: '60px',
              borderRadius: '20px',
              outline: 'none',
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <h5 className=" text-primary-700 mt-[23px] cursor-pointer">
          Resend code
        </h5>
      </div>
      <div className="flex justify-center items-center pb-[44px]">
        <div className="grid grid-cols-3 w-[250px] h-[320px]">
          <div
            onClick={() => addNumber('1')}
            className="flex justify-start items-center cursor-pointer select-none"
          >
            <h1>1</h1>
          </div>
          <div
            onClick={() => addNumber('2')}
            className="flex justify-center items-center cursor-pointer select-none"
          >
            <h1>2</h1>
          </div>
          <div
            onClick={() => addNumber('3')}
            className="flex justify-end items-center cursor-pointer select-none"
          >
            <h1>3</h1>
          </div>
          <div
            onClick={() => addNumber('4')}
            className="flex justify-start items-center cursor-pointer select-none"
          >
            <h1>4</h1>
          </div>
          <div
            onClick={() => addNumber('5')}
            className="flex justify-center items-center cursor-pointer select-none"
          >
            <h1>5</h1>
          </div>
          <div
            onClick={() => addNumber('6')}
            className="flex justify-end items-center cursor-pointer select-none"
          >
            <h1>6</h1>
          </div>
          <div
            onClick={() => addNumber('7')}
            className="flex justify-start items-center cursor-pointer select-none"
          >
            <h1>7</h1>
          </div>
          <div
            onClick={() => addNumber('8')}
            className="flex justify-center items-center cursor-pointer select-none"
          >
            <h1>8</h1>
          </div>
          <div
            onClick={() => addNumber('9')}
            className="flex justify-end items-center cursor-pointer select-none"
          >
            <h1>9</h1>
          </div>
          <div className="flex justify-start items-center"></div>
          <div
            onClick={() => addNumber('0')}
            className="flex justify-center items-center cursor-pointer select-none"
          >
            <h1>0</h1>
          </div>
          <div
            onClick={() => removeOneNumber()}
            className="flex justify-end items-center cursor-pointer select-none"
          >
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
