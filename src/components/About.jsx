import React from "react";
import AboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={AboutImg} alt="about img" className="w-full h-64" />
        <article>
          <SectionTitle text={"code and coffee"} />
          <p className="text-slate-500 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            repellendus fuga. Quas tenetur expedita adipisci distinctio sit?
            Dicta, deleniti iure, aliquam, cum unde veritatis magnam modi
            officia asperiores natus omnis.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
