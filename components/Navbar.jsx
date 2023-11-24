import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="justify-between items-center flex px-3 md:px-0 py-4 w-full">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <Image src={'/logo.PNG'} alt="logo" width={40} height={40}/>
      </a>
      <div className="group relative cursor-pointer">
        <p className="flex gap-2 text-xl items-center">
          Community{" "}
          <span className="text-white-300 rotate-180 group-hover:rotate-0 duration-150 ease-in-out transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </p>
        <div className="opacity-0 group-hover:opacity-100 text-xl right-0 -mt-1 group-hover:mt-1 duration-100 ease-in-out transition-all flex absolute z-20 flex-col gap-4 px-7 py-3 rounded-xl bg-black backdrop-blur-xl bg-opacity-40">
          <a
            className="text-gray-400 hover:text-white "
            href="https://t.me/FROGE2VIP"
            target="_blank"
            rel="noopener noreferrer">
            Telegram
          </a>
          <a
            className="text-gray-400 hover:text-white "
            href="https://twitter.com/froge2vip"
            target="_blank"
            rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
