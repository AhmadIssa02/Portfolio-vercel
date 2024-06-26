'use client'

import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import myImage from "../public/images/Ahmad.png"
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import ContactComponentSm from '@/components/ContactComponentSm';
import Skill from '@/components/SkillsComponent';
import myImage2 from "../public/images/mypicture.jpeg"
import ProjectComponent from '@/components/ProjectsComponent';
import myImage6 from "../public/images/testImage2.jpeg"
import ninjaco from "../public/images/ninjaco.png"
import pacman from "../public/images/AI Pacman.jpg"
import exploro from "../public/images/exploro.png"
import tanks from "../public/images/tankz.png"
import password from "../public/images/Capture.jpg"



const PageSm: React.FC = () => {
    const projectsData = [
        {
            title: "Ninjaco",
            image: ninjaco.src,
            link: "https://ninjaco.vercel.app",
            text: "An interactive online platform that teaches kids how to program and use robotics through games and puzzles.",
        },
        {
            title: "AI Pacman",
            image: pacman.src,
            link: "https://github.com/AhmadIssa02/Pacman-Search-Agents-AI-Alogrithms-2-",
            text: "AI pacman that wins every time, using algorithms such as A*, DFS, BFS, and UCS to find the shortest path.",
        },
        // {
        //     title: "Flying Kid Game",
        //     image: game.src,
        //     link: "https://ninjaco-ahmadissa.vercel.app/",
        //     text: "A game designed using Unity and C# where the player controls a flying baby, avoiding obstacles and collecting coins.",
        // },
        {
            title: "Exploro",
            image: exploro.src,
            link: "https://github.com/AhmadIssa02/Exploro",
            text: "An online web forum for travelers to share their experiences, engage with a community, and plan their next journey.",
        },
        {
            title: "Tankz!",
            image: tanks.src,
            link: "https://github.com/quoc796/TankZ",
            text: "A tank battle game where you challenge yourself against an opponent in a fun one-on-one shooting war experience.",
        },
        {
            title: "Password Manager",
            image: password.src,
            link: "https://github.com/AhmadIssa02/PasswordManager",
            text: "A secure password manager that allows users to store, retrieve, and delete passwords for different accounts.",
        }
    ];

    const skillsData = [
        {
            title: 'Languages',
            skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C#'],
        },
        {
            title: 'Frontend',
            skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
        },
        {
            title: 'Backend / Databases',
            skills: ['Node.js', 'NestJs', 'MySQL', 'MongoDb'],
        },
        {
            title: 'Principles',
            skills: ['OOP', 'Data Structures and Algorithms', "MVC Architecture"],
        },
        {
            title: 'Tools',
            skills: ['Git', 'Docker', 'Unity', 'Postman'],
        },
        {
            title: 'Other',
            skills: ['Agile', 'NPM', 'RESTful APIs'],
        },
    ];


    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', handleScroll, { passive: true });

                return () => {
                    window.removeEventListener('scroll', handleScroll);
                };
            }
        };

        controlNavbar();
    }, [lastScrollY]);


    const homeRef = useRef<HTMLDivElement | null>(null);
    const executeHomeScroll = () => homeRef.current?.scrollIntoView({ behavior: "smooth" })
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const executeAboutScroll = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" })
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const executeSkillsScroll = () => skillsRef.current?.scrollIntoView({ behavior: "smooth" })
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const executeProjectsScroll = () => projectsRef.current?.scrollIntoView({ behavior: "smooth" })
    const contactRef = useRef<HTMLDivElement | null>(null);
    const executeContactScroll = () => contactRef.current?.scrollIntoView({ behavior: "smooth" })



    return (
        <div className='text-secondary-color w-full overflow-hidden'>
            <header className={`z-10 fixed w-full bg-primary-color mx-auto py-6 border-b border-b-1 border-black transition-all ease-in-out duration-500  ${visible ? 'top-0' : '-top-full'} `}>
                <div className="flex gap-4 text-sm font-bold items-center ml-3">
                    <button onClick={() => executeHomeScroll()} className='hover:underline'> Home </button>
                    <button onClick={() => executeAboutScroll()} className='hover:underline'> About </button>
                    <button onClick={() => executeSkillsScroll()} className='hover:underline'> Skills </button>
                    <button onClick={() => executeProjectsScroll()} className='hover:underline'> Projects </button>
                    <button onClick={() => executeContactScroll()} className='hover:underline'> Contact </button>
                </div>
            </header>
            <div ref={homeRef} id="home" className="pt-24 text-3xl ml-2 flex justify-between items-center">
                <div className="w-1/2 font-bold text-2xl mt-6 overflow-auto" style={{ flexShrink: 0, minWidth: '250px' }}>
                    <Typewriter
                        options={{
                            strings: ["Hello World! My name is Ahmad Issa", "I'm a Software Engineer", "I hold a degree in Computer Science from LAU", "I'm a Tech Enthusiast"],
                            autoStart: true,
                            loop: true,
                            delay: 45,
                            deleteSpeed: 15,
                        }}
                    />
                </div>
                <div className="w-[40%] mt-8" style={{ flexShrink: 0 }}>
                    <Image className="relative right-3" src={myImage.src} width={200} height={150} alt="My Image" />
                </div>
            </div>

            <div ref={aboutRef} id="about" className="flex flex-col gap-x-4 gap-y-4 mt-14 bg-primary-color text-center" >

                <div className='font-black text-lg ml-10 '> Who am I?</div>
                <div className="flex justify-between ">
                    <Image className=" ml-2 rounded-xl w-1/2 " src={myImage6.src} width={200} height={100} alt="My Image" />
                    <div>
                        <div className=' bg-tertiary-color p-2 rounded-md mx-2 font-black text-[9px] text-left'>
                            I'm Ahmad Issa, a dedicated Software Engineer with a passion for coding, technology, and sports. Throughout my academic journey, I accumulated over 400 volunteering hours, participated in two university exchange programs, in addition to one during high school, all while maintaining a high level of academic excellence, ultimately graduating from university with distinction.

                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='bg-tertiary-color w-full rounded-md p-2'>
                        <div className='p-2 font-black text-secondary-color text-[9px] text-left'>
                            During my academic journey, I excelled with a 98% on my high school Jordanian exams and graduated from LAU with distinction with a 3.55 GPA in Computer Science, showcasing my dedication and ability to meet high standards.
                            {/* During my academic journey, I excelled academically, achieving a remarkable 98% on my high school Jordanian exams and graduating from the Lebanese American University (LAU) with a commendable 3.55 GPA in Computer Science. These achievements not only reflect my dedication to learning but also demonstrate my ability to perform under pressure and meet high standards. */}
                            {/* <br></br> <br></br> */}
                            Beyond academics, my character has been deeply influenced by my volunteering experiences as I spent over 400 hours contributing to various NGOs. These experiences instilled in me a sense of empathy, teamwork, and social responsibility.
                            <br></br> <br></br>
                            In my professional journey, I've gained valuable experience through three internships. At GIZ, I honed data analysis and policy research skills. At Mozaic, I gained hands-on experience with .NET development, emphasizing teamwork and project management. Finally, at Al-Awael Specialized Technical Services, I further developed problem-solving and customer-centric skills as a technical support engineer.
                            {/* My professional journey has been equally enriching. I've had the privilege of gaining practical experience through three internships. As a research intern at GIZ, I delved into the intricacies of data analysis and policy research, honing my analytical skills and deepening my understanding of complex issues. My tenure as a software developer intern at Mozaic provided hands-on exposure to .NET development and taught me valuable lessons about teamwork and project management. Working closely with a team, I learned how to utilize Git services effectively, ensuring smooth collaboration and version control throughout the software development lifecycle. Additionally, my role as a technical support engineer at Al-Awael Specialized Technical Services further sharpened my problem-solving abilities and customer-centric approach. */}
                            <br></br> <br></br>
                            As a participant in the KLYES program at 16, I spent a transformative academic year in the United States. This experience helped me gain resilience and adaptability, qualities that were further honed during my time as an international student at LAU in Lebanon when I got accepted in the MEPI-TL program, where I embraced new cultures and educational challenges. Additionally, an exchange semester at Kent State University broadened my perspective and reinforced my ability to navigate diverse environments.
                            <br></br><br></br>
                            All these experiences have shaped me into a flexible and globally-minded individual, ready to thrive in any setting.
                        </div>
                    </div>
                </div>
            </div>
            <div ref={skillsRef} id="skills" className="flex flex-wrap justify-center items-center gap-2 mt-4">
                {skillsData.map((skillCategory, index) => (
                    <Skill key={index} title={skillCategory.title} skills={skillCategory.skills} />
                ))}
            </div>
            <div >
                <div ref={projectsRef} id="projects" className="flex flex-wrap mt-8 p-1 gap-x-2 gap-y-4 justify-center w-full">
                    {projectsData.map((project, index) => (
                        <ProjectComponent key={index} title={project.title} image={project.image} link={project.link} text={project.text} />
                    ))}
                    <div className="bg-quaternary-color text-white rounded-lg shadow-md p-3  w-[47%] md:w-[42%]  h-auto hover:shadow-xl hover:scale-105 transition-shadow duration-300 ease-in-out flex flex-col text-center items-center">
                        <img src={myImage2.src} alt="myImage" width={70} height={70} className="w-full h-32 md:h-48 object-cover rounded-t-lg" />
                        <div className="w-full">
                            <h2 className="font-extrabold text-base md:text-2xl my-3 ">AhmadIssa02</h2>
                            <div className=" ">
                                <div className="mb-1 text-xs font-medium text-center">These and many more cool projects are on my Github!!</div>
                            </div>
                        </div>
                        <a href="https://github.com/AhmadIssa02" target="_blank" className="bg-white text-secondary-color text-sm rounded-lg p-2 w-3/5 mt-6 hover:bg-quaternary-color/80 transition-all duration-300 ease-in-out">My Github </a>
                    </div>
                </div>
            </div>
            <div ref={contactRef} id="contact" className='w-auto'>
                <ContactComponentSm />
            </div>
        </div>
    );
};

export default PageSm;