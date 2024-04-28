import React from 'react';
import Image from 'next/image';
import github from 'public/images/github.png';
import linkedin from 'public/images/linkedIn.png';
import email from 'public/images/email.png';
import resume from 'public/images/resume.png';
import download from 'public/images/download.png';
import myImage2 from 'public/images/myImage2.png';
import myImage from "../public/images/mypicture2.jpeg"


function ContactComponentMd() {
    return (
        <div className='flex flex-col items-start md:items-center w-full mt-24'>
            <h1 className='font-bold text-xl md:text-4xl mb-4 '>Let's Connect Together!</h1>
            <div className='flex justify-between bg-primary-color pb-12 mt-4'>
                <div className='flex ml-4 md:ml-12 pb-12 mt-8 w-1/2'>
                    <div className='lg:ml-4 text-[11px]  md:text-[24px] font-extrabold justify-between align-middle content-center w-full mr-52'>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20  underline hover:scale-105 '>
                            <Image src={email} width={40} height={40} alt="email" />
                            <a className='ml-1 md:ml-4 text-[22px]  hover:underline' href="mailto:ahmad.issa.yes@gmail.com">ahmad.issa.yes@gmail.com</a>
                        </div>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20 mt-6 underline hover:scale-105'>
                            <Image src={linkedin} width={40} height={40} alt="linkedin" />
                            <a className='ml-1 md:ml-4 lg:mt-0  hover:underline' href="https://www.linkedin.com/in/ahmad-issa-02l/">Ahmad Issa</a>
                        </div>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20 mt-6 underline hover:scale-105'>
                            <Image src={github} width={36} height={36} alt="github" />
                            <a className='ml-2 md:ml-4 lg:mt-0  hover:underline' href="https://github.com/AhmadIssa02">AhmadIssa02</a>
                        </div>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20 mt-6 underline hover:scale-105'>
                            <Image src={resume} width={48} height={48} alt="resume" />
                            <a className='ml-0 md:ml-2   hover:underline text-[10px] md:text-[24px] ' href="/Ahmad-Issa-Resume.pdf" download>Download Resume</a>
                            <Image className="w-4 h-4 mt-2" src={download} width={10} height={2} alt="download" />
                        </div>
                    </div>
                </div>
                <div className='justify-self-end mr-12 mt-4 '>
                    <Image className="rounded-md " src={myImage} width={280} height={200} alt="My Image" />
                </div>
            </div>
        </div>
    );
}

export default ContactComponentMd;
