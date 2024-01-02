/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React, { useEffect, useState } from "react";
import myImage from 'public/images/Ahmad.png';
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import SkillsComponent from "../components/SkillsComponent";
import ContactComponent from "../components/ContactComponent";
import Head from "next/head";
import background from 'public/images/background4.png';
export default function Home() {
  const [activeSection, setActiveSection] = useState("home"); 

  const handleLinkClick = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLElement)?.getAttribute('href')?.substring(1);
        if (targetId) {
          handleLinkClick(targetId);
        }
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

  const backgroundImage = `url(${background.src})`;

  return (
    <>
       <Head>
        <title>Ahmad Issa</title>
        <meta name="description" content="Ahmad Issa's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Mooli:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex overflow-x-hidden min-h-screen font-body flex-col items-center justify-between pt-12 md:px-20 bg-cover bg-center" style={{ backgroundImage }}>
        <div className="rounded-2xl shadow-lg sm:mb-10 md:mb-2 bg-gray-100 w-auto lg:w-10/12 first-letter:h-relative ">
          <div className='flex ' > 
          {/* bg-black pb-4 rounded-t-2xl */}
            <ul className="flex justify-between mx-auto mt-6 space-x-2 md:space-x-4 text-white">
              <li className="section transform transition-transform hover:scale-110"><a href="#home" className={` font-extrabold bg-black rounded-2xl text-base lg:text-xl hover:underline px-2 md:px-4 lg:px-8 py-2 ${activeSection === "home" ? "active" : ""}`} onClick={() => handleLinkClick("home")}>Home</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#about" className={` font-semibold bg-black rounded-2xl text-base lg:text-xl hover:underline px-2 md:px-4 lg:px-8 py-2 ${activeSection === "about" ? "active" : ""}`} onClick={() => handleLinkClick("about")}>About</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#projects" className={` font-semibold bg-black rounded-2xl text-base lg:text-xl hover:underline px-2 md:px-4 lg:px-8 py-2 ${activeSection === "projects" ? "active" : ""}`} onClick={() => handleLinkClick("projects")}>Projects</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#skills" className={` font-semibold bg-black rounded-2xl text-base lg:text-xl hover:underline px-2 md:px-4 lg:px-8 py-2 ${activeSection === "skills" ? "active" : ""}`} onClick={() => handleLinkClick("skills")}>Skills</a></li>
              <li className="section transform transition-transform hover:scale-110"><a href="#contact" className={` font-semibold bg-black rounded-2xl text-base lg:text-xl hover:underline px-2 md:px-4 lg:px-8 py-2 ${activeSection === "contact" ? "active" : ""}`} onClick={() => handleLinkClick("contact")}>Contact</a></li>
            </ul>
          </div>
          {sections[activeSection]}
        </div>
      </main>
    </>
  );
}
