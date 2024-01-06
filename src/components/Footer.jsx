import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-10">
      <div className="container m-auto py-10 px-5 grid grid-cols-2 md:grid-cols-7 gap-8">
        <div className="col-span-2 space-y-5">
          <h1>8kra</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            atque voluptatibus impedit repudiandae autem qui, molestiae maxime
            aliquam.
          </p>
        </div>
        <div>
          <h2 className="font-bold py-2">About</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="#">About us</a>
            <a href="#">Features</a>
            <a href="#">News</a>
            <a href="#">Art</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold py-2">Company</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="#">Blog</a>
            <a href="#">Faqs</a>
            <a href="#">Payments</a>
            <a href="#">Prices</a>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-bold py-2">Support</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="#">Account</a>
            <a href="#">Contact us</a>
            <a href="#">Accebility</a>
            <a href="#">Price</a>
          </div>
        </div>
        <div className="col-span-2  space-y-5">
          <h2 className="font-bold">Get in touch</h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            ducimus sunt, consectetur minus doloribus labore?
          </p>
          <p>
            {" "}
            <a
              href=""
              className="px-5 py-2 rounded-full text-white bg-green-500 font-semibold"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
