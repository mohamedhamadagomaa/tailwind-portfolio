import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-20 align-element">
      <SectionTitle text={"web creations"} />
      <div className=" py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          const { id } = project;
          return <ProjectCard key={id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
