import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
//import GitHubButton from "react-github-btn";

const ProjectCard = ({ project: { title, description, tags, link } }) => {
  return (
    <div className="  lg:w-full  h-full bg-[#004D00]	 p-4  w-2/3    m-3 mx-auto   rounded-xl border-2 border-gray-300">
      <a href={link}>
        <h1 className="  text-xl text-center font-bold">
          {title}{" "}
          <FaExternalLinkAlt className="inline  w-3 h-3 align-baseline" />
        </h1>
      </a>
      <hr className="my-1 md:my-2" />
      <p className=" opacity-10  text-xs  hover:opacity-100 h-12 lg:text-sm text-justify ">{description}</p>
      <div className="mt-1 gap-1 h-1 md:h-2     text-xs flex flex-wrap text-justify  justify-center items-center md:gap-2">
        {tags.map((tag) => (
          <div className="px-1 py-1 border-2 rounded-full">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
 