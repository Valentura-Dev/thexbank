import { useEffect, useRef, useState } from 'react';
import BackIcon from '../assets/icons/back.svg';
import upArrow from '../assets/icons/upArrow.svg';
import LogoText from '../assets/icons/LogoText.png';
import { SignUp } from '../components';
import { useNavigate } from 'react-router-dom';

const UploadKYC = ({ onSubmit }) => {
  const [documentType, setDocumentType] = useState('');
  const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
  const [document, setDocument] = useState('');
  const input = useRef(null);
  const select = useRef(null);

  function onDocumentTypeChange(e) {
    setDocumentType(e.target.value);
  }

  function onDocumentUpload(e) {
    setDocument(e.target.files[0] || {});
    setIsDocumentUploaded(true);
  }

  function submit() {
    if (isDocumentUploaded)
      onSubmit({ documentType, document: { name: document.name } });
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full px-[30px] pt-[70px]">
        <div className="border-b-[1px] border-secondary-600 pb-2">
          <select
            ref={select}
            className={
              documentType === ''
                ? 'text-[16px] w-full text-secondary-100 opacity-30'
                : 'w-full text-secondary-50'
            }
            onChange={onDocumentTypeChange}
          >
            <option value="" disabled selected>
              Select Document Type
            </option>
            <option value="pasaport">Pasaport</option>
          </select>
        </div>
      </div>
      <div className="flex-1 px-[30px] flex flex-col pb-4 pt-[44px]">
        <div className="border-[1px] flex justify-center items-center border-primary-400 flex-1 rounded-[20px]">
          <input
            ref={input}
            type="file"
            accept=".jpg, .jpeg, .png"
            className="hidden"
            onChange={onDocumentUpload}
          />
          <div
            onClick={() => {
              if (documentType === '') {
                select.current.focus();
                return;
              }
              input.current.click();
            }}
            className="flex cursor-pointer flex-col items-center"
          >
            <img src={upArrow} className="size-[140px]" alt="" />
            <h3 className="text-center font-bold">
              Upload your documents <br />
              (Front and Back Side) <br />
              <h5 className="font-light">{document.name || ''}</h5>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 px-[30px] pb-16">
        <button
          className={
            isDocumentUploaded
              ? 'w-full bg-primary-700 border-[1px] border-secondary-50 rounded-[10px]'
              : 'w-full bg-primary-disabled border-[1px] border-secondary-50 rounded-[10px]'
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
};

export default function KYC() {
  const navigate = useNavigate();

  function onSubmit(data) {
    localStorage.setItem('kyc', JSON.stringify(data));
    navigate('/dashboard');
  }

  return (
    <div className=" bg-secondary-200 w-full min-h-dvh flex flex-col gap-6">
      <div className="absolute flex h-[calc(100dvh-82px)] transition-all ease-in-out duration-700 w-full rounded-t-[60px] bg-secondary-700 bottom-0">
        <UploadKYC onSubmit={onSubmit} />
      </div>

      <div className="flex transition-all duration-700 justify-between w-full items-center pt-3">
        <a href="/dashboard">
          <img src={BackIcon} alt="" className="cursor-pointer ml-[6px]" />
        </a>
        <img src={LogoText} alt="" className="w-[150px] object-contain mr-7" />
      </div>
    </div>
  );
}
