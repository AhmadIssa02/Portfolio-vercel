import React from 'react';
import Image from 'next/image';

interface projectsData {
  title: string;
  image: string;
  link: string;
  text: string;
}

const ProjectComponent: React.FC<projectsData> = ({ title, image, link, text }) => {
  return (
    <div className="bg-white text-secondary-color font-medium rounded-lg shadow-md p-3  text-xs md:text-lg w-[47%] md:w-[42%]  h-auto hover:shadow-xl hover:scale-105 transition-shadow duration-300 ease-in-out flex flex-col text-center items-center">
      <img src={image} alt={title} width={120} height={120} className="w-full h-32 md:h-48 object-cover rounded-t-lg" />
      <div className="w-full">
        <h2 className="font-extrabold text-base md:text-2xl my-3 ">{title}</h2>
        <div className=" ">
          <div className="mb-1 text-[8px] md:text-base text-left">{text}</div>
        </div>
      </div>
      <a href={link} target="_blank" className="bg-quaternary-color text-white rounded-lg p-3 w-3/5 mt-2 hover:bg-quaternary-color/80 transition-all duration-300 ease-in-out">View Project</a>
    </div>
  );
}

export default ProjectComponent;
