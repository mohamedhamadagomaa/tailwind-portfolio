import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 items-center pb-5  mb-4 ">
      <h2 className="capitalize text-3xl font-medium tracking-wider">{text}</h2>
    </div>
  );
};

export default SectionTitle;
