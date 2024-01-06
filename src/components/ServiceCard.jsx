import React from "react";

const ServiceCard = ({ src, title }) => {
  return (
    <div className="md:w-[300px] p-10  bg-gray-600/30 rounded-xl space-y-5 flex flex-col items-center text-center">
      <img src={src} alt="" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident
        est iure.
      </p>
    </div>
  );
};

export default ServiceCard;
