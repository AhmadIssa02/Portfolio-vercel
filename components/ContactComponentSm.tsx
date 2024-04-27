import React from 'react';
import Image from 'next/image';
import github from 'public/images/github.png';
import linkedin from 'public/images/linkedIn.png';
import email from 'public/images/email.png';
import resume from 'public/images/resume.png';
import download from 'public/images/download.png';
import myImage2 from 'public/images/myImage2.png';
import myImage from "../public/images/mypicture2.jpeg"


function ContactComponentSm() {
    return (
        <div className='flex flex-col text-secondary-color items-center w-full mt-20 ' >
            <h1 className='font-bold text-xl md:text-4xl mb-4'>Let's Connect Together!</h1>
            <div className='flex justify-between bg-primary-color pb-12 mt-4 space-x-12'>
                <div className='flex ml-1 pb-12 mt-8 w-1/2'>
                    <div className=' text-[10px] font-extrabold justify-between align-middle content-center w-full '>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20  underline hover:scale-105 '>
                            <Image src={email} width={28} height={28} alt="email" />
                            <a className='ml-1   hover:underline' href="mailto:ahmad.issa.yes@gmail.com">ahmad.issa.yes@gmail.com</a>
                        </div>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20 mt-6 underline hover:scale-105'>
                            <Image src={linkedin} width={28} height={28} alt="linkedin" />
                            <a className='ml-2 lg:mt-0  hover:underline' href="https://www.linkedin.com/in/ahmad-issa-02l/">Ahmad Issa</a>
                        </div>
                        <div className='flex items-center ml-3 md:ml-6 lg:ml-20 mt-6 underline hover:scale-105'>
                            <Image src={github} width={24} height={24} alt="github" />
                            <a className='ml-2 md:ml-4 lg:mt-0  hover:underline' href="https://github.com/AhmadIssa02">AhmadIssa02</a>
                        </div>
                        <div className='flex items-center ml-2 md:ml-6 lg:ml-20 mt-6 underline hover:scale-105'>
                            <Image src={resume} width={32} height={32} alt="resume" />
                            <a className='ml-0 md:ml-2   hover:underline  ' href="/Ahmad-Issa-Resume.pdf" download>Download Resume</a>
                            <Image className="w-4 h-4 mt-2" src={download} width={10} height={2} alt="download" />
                        </div>
                    </div>
                </div>
                <div className='justify-self-end mt-6 pr-2'>
                    <Image className="rounded-md " src={myImage} width={180} height={200} alt="My Image" />
                </div>
            </div>
        </div>
    );
}

export default ContactComponentSm;
