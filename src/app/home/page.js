import React from "react";
import Image from "next/image";
import image from "/Images/main.png";
const page = () => {
  return (
    <div className=" bg-slate-400 h-screen" >
    <div className="m-10 mt-0 flex top-0 flex-row">
      <div className="w-1/2 mt-20 ml-6 ">
        <p className="text-6xl font-bold mb-7">
          The Finance App That Works for You
        </p>
        <span className="text-slate-800">
          Managing money can be challenging, but you don't have to face it on
          your own. truePay helps you save smarter, spend wisely, view all your
          finances in one place, and reclaim control over your financial future.
        </span>
        <br/>
        <button className="mt-5 text-2xl bg-blue-600 text-white p-3 rounded-2xl">Get Started</button>
      </div>
      <div className="mt-20  pl-40 ">
        <Image src={image} width={190} height={350} />
      </div>
    </div>
    </div>
  );
};

export default page;
