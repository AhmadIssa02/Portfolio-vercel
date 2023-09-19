"use client";
import React, { useEffect, useState } from "react";
import myImage from '../images/Ahmad.png';
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import SkillsComponent from "../components/SkillsComponent";
import ContactComponent from "../components/ContactComponent";
import Head from "next/head";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home"); // Initial active section

  const handleLinkClick = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1); // Use e.currentTarget
        handleLinkClick(targetId);
      });
    });
  }, []);

  // Define your components for each section
  const sections: { [key: string]: JSX.Element } = {
    home: <HomeComponent />,
    about: <AboutComponent />,
    projects: <ProjectsComponent />,
    skills: <SkillsComponent />,
    contact: <ContactComponent />,
  };

  return (
    <>
       <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mooli:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex min-h-screen font-body flex-col items-center justify-between pt-12 px-24 bg-gradient-to-r from-indigo-300 to-indigo-800">
        <div className="rounded-2xl shadow-lg bg-gray-100 w-4/5 h- relative">
          <div className='flex' >
            <ul className="flex justify-center mx-12 mt-10 space-x-4">
              <li className="section transform transition-transform hover:scale-110"><a href="#home" className={`text-white font-semibold bg-gradient-to-r from-indigo-300 to-indigo-800 px-4 py-2 rounded-full text-lg hover:underline ${activeSection === "home" ? "active" : ""}`} onClick={() => handleLinkClick("home")}>Home</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#about" className={`text-white font-semibold bg-gradient-to-r from-indigo-300 to-indigo-800 px-4 py-2 rounded-full text-lg hover:underline ${activeSection === "about" ? "active" : ""}`} onClick={() => handleLinkClick("about")}>About</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#projects" className={`text-white font-semibold bg-gradient-to-r from-indigo-300 to-indigo-800 px-4 py-2 rounded-full text-lg hover:underline ${activeSection === "projects" ? "active" : ""}`} onClick={() => handleLinkClick("projects")}>Projects</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#skills" className={`text-white font-semibold bg-gradient-to-r from-indigo-300 to-indigo-800 px-4 py-2 rounded-full text-lg hover:underline ${activeSection === "skills" ? "active" : ""}`} onClick={() => handleLinkClick("skills")}>Skills</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#contact" className={`text-white font-semibold bg-gradient-to-r from-indigo-300 to-indigo-800 px-4 py-2 rounded-full text-lg hover:underline ${activeSection === "contact" ? "active" : ""}`} onClick={() => handleLinkClick("contact")}>Contact</a></li>
            </ul>
          </div>
          {sections[activeSection]}
        </div>
         
      </main>
    </>
  );
}
