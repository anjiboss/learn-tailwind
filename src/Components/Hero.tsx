import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center ">
      {/*           large screen:     mediumScreen:  SmallScreen:            margin-bottom   */}
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        EGGCELLENT
      </h1>
      <Link
        to="/"
        className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-400 ease-in-out flex items-center animate-bounce"
      >
        Order Now <FiShoppingCart className="ml-4" />
      </Link>
    </div>
  );
};
export default Hero;
