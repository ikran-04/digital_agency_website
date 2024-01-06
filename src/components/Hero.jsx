import React from "react";

const Hero = () => {
  return (
    <div className="py-20 flex justify-between items-center">
      <div className="md:w-1/2 space-y-5">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <h1 className="text-7xl font-semibold">
          A{" "}
          <a href="/" className="font-bold text-green-500">
            Digital{" "}
          </a>
          Product Design Agency
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          explicabo, deleniti quisquam exercitationem est assumenda ullam beatae
          sit id eaque!
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          {" "}
          <a href="/">Get Started</a>
        </button>
      </div>
      <div>
        <img src="/hero_img.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
