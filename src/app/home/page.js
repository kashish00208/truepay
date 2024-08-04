import React from "react";
import Image from "next/image";
import image from "/Images/main.png";

const Page = () => {
  return (
    <div className="bg-slate-400 min-h-screen flex flex-col justify-center">
      <div className="mx-4 sm:mx-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 mt-10 md:mt-20 text-center md:text-left">
          <p className="text-4xl md:text-6xl font-bold mb-5 md:mb-7">
            The Finance App That Works for You
          </p>
          <p className="text-base md:text-lg text-slate-800">
            Managing money can be challenging, but you do not have to face it on
            your own. truePay helps you save smarter, spend wisely, view all your
            finances in one place, and reclaim control over your financial future.
          </p>
          <button className="mt-5 text-lg md:text-2xl bg-blue-600 text-white p-3 rounded-2xl">
            Get Started
          </button>
        </div>
        <div className="mt-10 md:mt-0 md:pl-40  flex justify-center">
          <Image src={image} width={190} height={350} className="w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default Page;
