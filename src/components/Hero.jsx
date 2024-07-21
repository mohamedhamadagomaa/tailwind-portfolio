import React from "react";
import heroImg from "../assets/hero.svg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element   grid md:grid-cols-2 gap-8 items-center">
        <article>
          <h1 className="capitalize text-7xl font-bold tracking-wider">
            I'm mohammad
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End React Developer
          </p>
          <p className="capitalize mt-2 text-lg text-slate-700 tracking-wide">
            turing ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitter className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="HeroImg" className="h-80 lg-96 pt" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
