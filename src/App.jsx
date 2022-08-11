import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import copy from 'copy-to-clipboard';
import 'animate.css';


const App = () => {

  const [password, setPassword] = useState("password");
  const [length, setLength] = useState(8);
  const [upperCase, setUppercase] = useState(true);
  const [lowerCase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [copied, setCopied] = useState(false);

  const generator = () => {
    let password_ = " ";
    let temp = " ";
    if (upperCase) password_ += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase) password_ += 'abcdefghijklmnopqrstuvwxyz';
    if (number) password_ += '0123456789';
    if (symbol) password_ += '!@#$%^&*()_+-={}[]:";\'<>?,./';
    setPassword('');

    if (length > 0 && length <= 20) {
      for (let i = 0; i < length; i++) {
        temp += password_[Math.floor(Math.random() * password_.length)] || '';
      }
    } else {
      temp = "UNDEFINDED";
    }
    setPassword(temp);
  };

  useEffect(() => {
    generator()
  }, [upperCase, lowerCase, number, symbol, length])


  return (
    <div className="bg-sky-900 flex flex-col justify-center items-center w-full h-screen">
      <div className="animate__animated animate__zoomInDown font-['Work+Sans'] mb-5 md:mb-10 text-slate-100 text-2xl md:text-4xl tracking-widest font-light">
        Password Generator
      </div>
      <div className="motion-safe:animate-spin ml-2 text-xl md:text-3xl text-cyan-400 mt-3 md:mt-5 font-['Lora'] font-bold tracking-wide animate__animated animate__zoomIn">
        uwu
      </div>
      <div className="flex flex-row items-cente gap-2 md:gap-4 border-slate-900 text-slate-100 border-b border-slate-100 mt-5 md:mt-8 min-w-[50vw] md:min-w-[30vw]">
        <div className="text-l md:text-xl md:text-2xl font-['Ubuntu'] flex-1 gap-4 ml-4 overflow-x-auto tracking-wider">
          {password}</div>
        <button onClick={() => generator()} >
          <Icon icon="carbon:reset" className="hover:cursor-pointer text-yellow-300 w-4 md:w-5 h-4 md:h-5" />
        </button>

        <button onClick={() => {
          copy(password);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        >
          <Icon className="hover:cursor-pointer text-yellow-300 w-4 md:w-5 h-4 md:h-5" icon={copied ? "uil:check" : "uil:copy"} />
        </button>

      </div>
      <div classNmae="flex flex-col items-start">
        <div className='flex flex-row gap-2 md:gap-4 mt-5 md:mt-10'>
          <div className='flex flex-row items-center gap-1 text-slate-100 animate__animated animate__lightSpeedInLeft'>
            <input checked={lowerCase} onClick={() => setLowercase(!lowerCase)} type="checkbox" className="w-3 md:w-4 h-3 md:h-4 accent-cyan-400" />
            <div className="text-l md:text-xl font-['Ubuntu'] ">
              Lowercase Character</div>
          </div>
          <div className='flex flex-row items-center gap-1 text-slate-100 animate__animated animate__lightSpeedInLeft'>
            <input checked={upperCase} onClick={() => setUppercase(!upperCase)} type="checkbox" className="w-3 md:w-4 h-3 md:h-4 accent-cyan-400" />
            <div className="text-l md:text-xl font-['Ubuntu'] space-x-10">
              Uppercase Character</div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className='flex flex-row items-center gap-1 text-slate-100 animate__animated animate__lightSpeedInRight'>
            <input checked={number} onClick={() => setNumber(!number)} type="checkbox" className="w-3 md:w-4 h-3 md:h-4 accent-cyan-400" />
            <div className="text-l md:text-xl font-['Ubuntu'] space-x-10">
              Number Character</div>
          </div>
          <div className="flex flex-row items-center gap-1 text-slate-100 animate__animated animate__lightSpeedInRight ml-1 md:ml-4">
            <input checked={symbol} onClick={() => setSymbol(!symbol)} type="checkbox" className="w-3 md:w-4 h-3 md:h-4 accent-cyan-400" />
            <div className="text-l md:text-xl font-['Ubuntu'] space-x-10 ">
              Symbols Character</div>
          </div>
        </div>
      </div>
      <div className="text-l md:text-xl font-['Ubuntu'] text-slate-100 mt-5 animate__animated animate__bounceInUp">
        Password Length (1-20)
      </div>
      <div className="flex flex-row mt-1 md:mt-2 text-xl md:text-2xl">
        <button type="button" className="hover:cursor-pointer text-slate-100 mr-6" onClick={() => parseInt(setLength(length - 1))} >
          -
        </button>
        <input value={length} onChange={(e) => setLength(parseInt(e.target.value))} type="textbox" className='min-w-[4vw] md:min-w-[15vw] font-light' />
        <button type="button" className="hover:cursor-pointer text-2xl text-slate-100 ml-6" onClick={() => setLength(length + 1)} >
          +
        </button>
      </div>
    </div >
  )
}

export default App