'use client'
import React from 'react';
import { useState, useEffect } from "react";
import myImage from "../public/images/Ahmad.png"
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import ContactComponent from '@/components/ContactComponentMd';
import myImage2 from "../public/images/mypicture.jpeg"
import myImage5 from "../public/images/testimage.jpeg"
import myImage6 from "../public/images/testImage2.jpeg"
import Skill from '@/components/SkillsComponent';
import ProjectComponent from '@/components/ProjectsComponent';
import ninjaco2 from "../public/images/ninjaco2.png"
import pacman from "../public/images/AI Pacman.jpg"
import exploro from "../public/images/exploro.png"
import tanks from "../public/images/tankz.png"


const PageMd: React.FC = () => {
    const skillsData = [
        {
            title: 'Langauges',
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
            title: 'Tools',
            skills: ['Git', 'Docker', 'Unity', 'Postman'],
        },
        {
            title: 'Principles',
            skills: ['OOP', 'Data Structures and Algorithms', "MVC Architecture"],
        },
        {
            title: 'Other',
            skills: ['Agile', 'NPM', 'RESTful APIs'],
        },
    ];

    const projectsData = [
        {
            title: "Ninjaco",
            image: ninjaco2.src,
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
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {

            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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

    return (
        <div className='bg-primary-color'>
            <header className={`z-10 fixed w-full bg-primary-color mx-auto py-6 border-b border-b-1 border-black transition-all ease-in-out duration-500  ${visible ? 'top-0' : '-top-full'} `}>
                <div className="flex gap-16 text-xl font-bold items-center ml-16  ">
                    <button onClick={() => scrollToSection("home")} className='hover:underline'> Home </button>
                    <button onClick={() => scrollToSection("about")} className='hover:underline'> About </button>
                    <button onClick={() => scrollToSection("skills")} className='hover:underline'> Skills </button>
                    <button onClick={() => scrollToSection("projects")} className='hover:underline'> Projects </button>
                    <button onClick={() => scrollToSection("contact")} className='hover:underline'> Contact </button>
                </div>
            </header>

            <div className="bg-primary-color">
                <div id="home" className="flex h-full bg-primary-color">
                    <div className="w-1/2 font-black text-6xl ml-16 lg:ml-28 mt-32 mb-12 " style={{ flexShrink: 0, minWidth: '250px' }}>
                        <Typewriter
                            options={{
                                strings: ["Hello World! My name is Ahmad Issa", "I'm a Software Engineer", "I hold a degree in Computer Science from LAU", "I'm a Tech Enthusiast"],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                            }}
                        />
                    </div>
                    <div className="ml-auto mr-24 mt-24 ">
                        <Image className=" relative rounded-md ml-20 " src={myImage.src} width={300} height={250} alt="My Image" />
                    </div>
                </div>



                <div id="about" className="lg:flex gap-x-4 gap-y-4 mt-32 bg-primary-color" >

                    <Image className=" ml-20 rounded-xl w-1/2 md:hidden lg:block" src={myImage6.src} width={500} height={200} alt="My Image" />
                    <div className='font-black text-7xl ml-4 md:hidden lg:block'> Who am I?</div>
                    <div className='bg-tertiary-color w-2/5 absolute left-1/2 mt-28 rounded-md md:hidden lg:block'>
                        <div className='p-6 font-black'>
                            Hello everyone, I'm Ahmad Issa, a dedicated Software Engineer with a passion for coding, technology, and sports. Throughout my academic journey, I accumulated over 400 volunteering hours, participated in two university exchange programs, in addition to one during high school, all while maintaining a high level of academic excellence, ultimately graduating from university with distinction.
                        </div>
                    </div>

                    <Image className=" rounded-xl absolute left-6 md:block lg:hidden" src={myImage5.src} width={350} height={150} alt="My Image" />
                    <div className='font-black absolute left-[60%]  text-5xl  md:block lg:hidden'> Who am I?</div>
                    <div className=' rounded-md absolute left-[40%] w-1/2 mt-16 md:block lg:hidden'>
                        <div className='font-black rounded-md text-[13px] bg-tertiary-color p-4'>
                            Hello everyone, I'm Ahmad Issa, a dedicated Software Engineer with a passion for coding, technology, and sports. Throughout my academic journey, I accumulated over 400 volunteering hours, participated in two university exchange programs, in addition to one during high school, all while maintaining a high level of academic excellence, ultimately graduating from university with distinction.
                        </div>
                    </div>
                </div>
                <div className='py-4 px-20 md:mt-[440px] lg:mt-4'>
                    <div className='bg-tertiary-color w-full rounded-md p-2'>
                        <div className='p-2 font-black text-secondary-color text-sm text-left'>
                            During my academic journey, I excelled with a remarkable 98% on my high school Jordanian exams and graduated from LAU with a 3.55 GPA in Computer Science, showcasing my dedication and ability to meet high standards.
                            {/* During my academic journey, I excelled academically, achieving a remarkable 98% on my high school Jordanian exams and graduating from the Lebanese American University (LAU) with a commendable 3.55 GPA in Computer Science. These achievements not only reflect my dedication to learning but also demonstrate my ability to perform under pressure and meet high standards. */}
                            {/* <br></br> <br></br> */}
                            Beyond academics, my character has been deeply influenced by my volunteering experiences as I spent over 400 hours contributing to various NGOs. These experiences instilled in me a sense of empathy, teamwork, and social responsibility.
                            <br></br> <br></br>
                            In my professional journey, I've gained valuable experience through three internships. At GIZ, I honed data analysis and policy research skills. At Mozaic, I gained hands-on experience with .NET development, emphasizing teamwork and project management. Finally, at Al-Awael Specialized Technical Services, I further developed problem-solving and customer-centric skills as a technical support engineer.
                            {/* My professional journey has been equally enriching. I've had the privilege of gaining practical experience through three internships. As a research intern at GIZ, I delved into the intricacies of data analysis and policy research, honing my analytical skills and deepening my understanding of complex issues. My tenure as a software developer intern at Mozaic provided hands-on exposure to .NET development and taught me valuable lessons about teamwork and project management. Working closely with a team, I learned how to utilize Git services effectively, ensuring smooth collaboration and version control throughout the software development lifecycle. Additionally, my role as a technical support engineer at Al-Awael Specialized Technical Services further sharpened my problem-solving abilities and customer-centric approach. */}
                            <br></br> <br></br>
                            As a participant in the KLYES program at 16, I spent a transformative academic year in the United States. This experience instilled in me resilience and adaptability, qualities that were further honed during my time as an international student at LAU in Lebanon when I got accepted in the MEPI-TL program, where I embraced new cultures and educational challenges. Additionally, an exchange semester at Kent State University broadened my perspective and reinforced my ability to navigate diverse environments.
                            <br></br><br></br>
                            In each of these experiences, whether as a participant of the KLYES program, an international student at LAU, or an exchange student at Kent State University, I learned to navigate new environments with ease, embracing diversity and embracing the challenges of adapting to my surroundings. These experiences have not only shaped my academic and personal growth but have also equipped me with invaluable skills that I carry with me in every aspect of my life and career journey.
                        </div>
                    </div>
                </div>
            </div>


            <div id="skills" className='font-black text-center mt-12 text-5xl'> Skills </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8 lg:mt-12">
                {skillsData.map((skillCategory, index) => (
                    <Skill key={index} title={skillCategory.title} skills={skillCategory.skills} />
                ))}
            </div>

            <div id="projects" className='font-black text-center mt-12 text-5xl'> Projects </div>
            <div className="flex flex-wrap mt-8 space-x-6 gap-y-4 justify-center w-full">
                <div> </div>
                {projectsData.map((project, index) => (
                    <ProjectComponent key={index} title={project.title} image={project.image} link={project.link} text={project.text} />
                ))}
                <div className="bg-white text-secondary-color mt-4 rounded-lg shadow-md p-3 md:text-lg  w-1/3  h-auto hover:shadow-xl hover:scale-105 transition-shadow duration-300 ease-in-out flex flex-col text-center items-center">
                    <img src={myImage2.src} alt="myImage" width={70} height={70} className="w-64 object-cover rounded-t-lg" />
                    <div className="w-full">
                        <h2 className="font-extrabold text-x; md:text-2xl my-3 ">AhmadIssa02</h2>
                        <div className=" ">
                            <div className="mb-1 text-lg font-medium text-center">These and many more cool projects are on my Github!!</div>
                        </div>
                    </div>
                    <a href="https://github.com/AhmadIssa02" target="_blank" className="bg-quaternary-color text-white rounded-lg p-3 w-3/5 mt-2 hover:bg-quaternary-color/80 transition-all duration-300 ease-in-out">My Github Account</a>
                </div>
            </div>

            <div id="contact" className=''>
                <ContactComponent />
            </div>
        </div>
    );
};
export default PageMd;