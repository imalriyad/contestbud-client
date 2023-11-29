"use client";
import { SearchBar } from "keep-react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaMedal } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../Hooks/useAuth";

const Hero = () => {
  const words = ["Unleash Your Brilliance: Join Our Thrilling Contests!"];
  const { getSearchText, handleSearch } = useAuth();

  return (
    <div>
      <div
        className="hero min-h-[90vh] px-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/WK8qgQZ/bgbanner.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
        }}
      >
        <div className="hero-content text-neutral-content md:text-center ">
          <div className="max-w-2xl mx-auto text-white">
            <h1 className="mb-5 md:text-5xl text-2xl  font-bold">
              <Typewriter words={words}></Typewriter>
            </h1>

            <p className="md:mb-10 mb-6 md:text-sm text-gray-300 text-xs ">
              Welcome to ContestBud, where innovation meets competition! Ignite
              your passion and showcase your skills in our diverse contests.
              From cutting-edge business challenges to captivating gaming
              competitions.
            </p>

            <div className="max-w-lg relative text-black mx-auto ">
              <SearchBar 
                size="md"
                handleOnChange={getSearchText}
                placeholder="Search Contest"
                addon={<FaMedal size={20} color="#5E718D" />}
            >{<HiMagnifyingGlass onClick={handleSearch} className="text-2xl top-3 right-3 cursor-pointer font-bold text-gray-600  absolute" />
          }</SearchBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
