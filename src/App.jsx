import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PricePlan from "./components/PricePlan";
import Footer from "./components/Footer";
import LearnMore from "./components/LearnMore";
import Watch from "./components/Watch";

function App() {
  return (
    <div className="bg-[url('/bg.svg')] bg-cover">
      <div className="container m-auto">
        <Navbar />
        <Hero />
        <Services />
        <LearnMore />
        <PricePlan />
        <Watch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
