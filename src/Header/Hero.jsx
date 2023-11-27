"use client";
import { SearchBar } from "keep-react";
import {  MagnifyingGlass } from "phosphor-react";
import { FaMedal } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  const words = [ 'Unleash Your Brilliance: Join Our Thrilling Contests!']

  return (
    <div>
      <div
        className="hero min-h-screen px-5"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/WK8qgQZ/bgbanner.jpg)",
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            objectFit:'fill'
            
        }}
      >
        <div className="hero-content text-neutral-content md:text-center ">
          <div className="max-w-2xl mx-auto text-white">
            <h1 className="mb-5 md:text-5xl text-2xl  font-bold"><Typewriter  words={words}></Typewriter></h1>
         
            <p className="md:mb-10 mb-6 md:text-sm text-gray-300 text-xs ">
            Welcome to ContestBud, where innovation meets competition! Ignite your passion and showcase your skills in our diverse contests. From cutting-edge business challenges to captivating gaming competitions.
            </p>

           <div className="max-w-lg mx-auto ">
           <SearchBar
            size='md'
      placeholder="Search Contest"
      addon={<FaMedal size={20} color="#5E718D" />}
      addonPosition="left"
      icon={<MagnifyingGlass size={22} color="#5E718D" />}
      iconPosition="right"
     
    >
      
    </SearchBar>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
