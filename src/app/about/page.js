import React from "react";

const Page = () => {
  return (
    <div className="bg-slate-400 min-h-screen p-4 md:pt-20 sm:pt-10 sm:p-10">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4">
          We work together,
          <br /> to work for you
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-slate-700 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
          At truePay, we are redefining the future of finance
          with cutting-edge technology and intuitive design. Our mission is to
          empower you with smart, secure, and seamless financial solutions
          tailored to your needs. We believe in making complex financial
          processes simple and accessible for everyone.
        </p>
      </div>
    </div>
  );
};

export default Page;

