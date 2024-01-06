import React from "react";

const LearnMore = () => {
  return (
    <div className="py-20 px-5 flex flex-col md:flex-row justify-between space-y-10 md:space-y-5 items-center">
      <div className="md:w-1/3">
        <img src="/learn_img.svg" alt="" />
      </div>
      <div className="md:w-1/2 space-y-5">
        <p>Lorem ipsum, dolor sit amet consectetur.</p>
        <h1 className="text-5xl font-semibold">
          Lorem, ipsum dolor sit amet consectetur.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          explicabo, deleniti quisquam exercitationem est assumenda ullam beatae
          sit id eaque!
        </p>
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
    </div>
  );
};

export default LearnMore;
