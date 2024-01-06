import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex justify-around items-center py-20">
      <ServiceCard src="/webs_dev.svg" title="Website design" />
      <ServiceCard src="dev.svg" title="Development" />
      <ServiceCard src="mobile_dev.svg" title="App design" />
    </div>
  );
};

export default Services;
