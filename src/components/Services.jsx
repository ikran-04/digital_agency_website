import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-20 px-5 space-y-10 md:space-y-0">
      <ServiceCard src="/webs_dev.svg" title="Website design" />
      <ServiceCard src="dev.svg" title="Development" />
      <ServiceCard src="mobile_dev.svg" title="App design" />
    </div>
  );
};

export default Services;
