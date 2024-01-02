/* eslint-disable @next/next/no-img-element */
// MyComponent.jsx
import React from 'react';
import myImage from 'public/images/Ahmad.png';
import github from 'public/images/github.png';
import linkedin from 'public/images/linkedIn.png';
import email from 'public/images/email.png';
import resume from 'public/images/resume.png';
import download from 'public/images/download.png';

function HomeComponent() {
  return (
    <div className='flex'>
        <div className='text-[12px] md:text-[18px] lg:text-[24px] font-extrabold justify-between align-middle content-center'>
            <div className='flex ml-2 md:ml-6 lg:ml-20 mt-8 lg:mt-20 '>
                <img className="w-10 h-10" src= {email.src} alt="email" />
                <a className='ml-1 md:ml-4 mt-2 lg:mt-0 text-black hover:underline' href= "mailto:ahmad.issa.yes@gmail.com">ahmad.issa.yes@gmail.com </a>
            </div>
            <div className='flex ml-2 md:ml-6 lg:ml-20 mt-6 '>
                <img className="w-10 h-10" src={linkedin.src} alt="linkedin" />
                <a className='ml-1 md:ml-4 lg:mt-0 text-black hover:underline' href= "https://www.linkedin.com/in/ahmad-issa-02l/">https://www.linkedin.com/in/ahmad-issa-02l/ </a>
            </div>
            <div className='flex ml-2 md:ml-6 lg:ml-20 mt-6 '>
                <img className="w-10 h-10" src={github.src} alt="github" />
                <a className='ml-1 md:ml-4 mt-2 lg:mt-0  text-black hover:underline' href= "https://github.com/AhmadIssa02">https://github.com/AhmadIssa02 </a>
            </div>
            <div className='flex  ml-2 md:ml-6 lg:ml-20  mt-6 '>
                <img className="w-12 h-12" src={resume.src} alt="resume" />
                <a className='ml-0 md:ml-2 mt-2 lg:mt-0 text-black hover:underline' href="/resume.pdf" download>Download Resume </a>
                <img className="mt-1 w-3 h-3 md:w-5 md:h-5" src={download.src} alt="download" />

            </div>
        </div>
        <img className=" bottom-0 w-64 h-64 md:w-96 md:h-96 mt-6 " src={myImage.src} alt="myImage" />
     
    </div>
  );
}

export default HomeComponent;

