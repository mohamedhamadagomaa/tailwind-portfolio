import React from "react";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle text="tech stack" />
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 py-16">
        {skills.map((skill) => {
          const { id } = skill;
          return <SkillsCard key={id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
