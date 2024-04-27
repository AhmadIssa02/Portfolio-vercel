import React from 'react';

interface SkillProps {
  title: string;
  skills: string[];
}

const Skill: React.FC<SkillProps> = ({ title, skills }) => {
  return (
    <div className="bg-quaternary-color text-primary-color rounded-lg shadow-md p-3 md:p-5 text-xs md:text-lg w-[45%] md:w-[30%] lg:w-[25%] h-40 md:h-60 hover:shadow-xl hover:scale-105 transition-shadow duration-300 ease-in-out">
      <h2 className="font-bold py-1 mb-3 text-sm md:text-xl md:ml-4 text-center">{title}</h2>
      <ul className="list-disc ml-4 md:ml-10">
        {skills.map((skill, index) => (
          <li key={index} className="mb-1">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
