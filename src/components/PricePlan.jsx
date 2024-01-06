import React from "react";
import PricingCard from "./PricingCard";

const PricePlan = () => {
  return (
    <div className="container m-auto py-20">
      <div className="md:w-1/2 m-auto text-center space-y-2">
        <h1 className="text-5xl font-semibold">
          We've got a plan that's perfect for you
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          officia temporibus quia, voluptas quibusdam enim at ad officiis.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-32 justify-items-center py-10 ">
        <PricingCard
          bg="white"
          title="Basic"
          text="black"
          img="/check_green.svg"
          price="19"
          button="bg-green-500 text-white"
        />
        <PricingCard
          bg="green-500"
          title="Standard"
          text="white"
          img="/check_white.svg"
          price="29"
          button="bg-white text-green-500"
        />
        <PricingCard
          bg="white"
          title="advanced"
          text="black"
          img="/check_green.svg"
          price="39"
          button="bg-green-500 text-white"
        />
      </div>
    </div>
  );
};

export default PricePlan;
