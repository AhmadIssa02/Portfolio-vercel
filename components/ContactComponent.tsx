/* eslint-disable @next/next/no-img-element */
// MyComponent.jsx
import React from 'react';
import myImage from 'public/images/Ahmad.png';

function HomeComponent() {
  return (
    <div className='flex'>
        <div className=' text-[24px] font-extrabold justify-between align-middle content-center'>
            <div className='flex ml-24 mr-10 mt-20 '>
                <img className="w-10 h-10" src='/images/email.png' alt="email" />
                <a className='ml-4 text-sky-700 hover:underline' href= "mailto:ahmad.issa.yes@gmail.com">ahmad.issa.yes@gmail.com </a>
            </div>
            <div className='flex ml-24 mr-10 mt-6 '>
                <img className="w-10 h-10" src='images/linkedin.png' alt="linkedin" />
                <a className='ml-4  text-sky-700 hover:underline' href= "https://www.linkedin.com/in/ahmad-issa-02l/">https://www.linkedin.com/in/ahmad-issa-02l/ </a>
            </div>
            <div className='flex ml-24 mr-10 mt-6 '>
                <img className="w-10 h-10" src='images/github.png' alt="github" />
                <a className='ml-4  text-sky-700 hover:underline' href= "https://github.com/AhmadIssa02">https://github.com/AhmadIssa02 </a>
            </div>
            <div className='flex ml-24 mr-10 mt-6 '>
                <img className="w-10 h-10" src='images/resume.png' alt="resume" />
                <a className='ml-4  text-sky-700 hover:underline' href="/resume.pdf" download> Download Resume </a>
            </div>
        </div>
        <img className="w-96 h-96 mr-16 " src={myImage.src} alt="myImage" />
     
    </div>
  );
}

export default HomeComponent;

