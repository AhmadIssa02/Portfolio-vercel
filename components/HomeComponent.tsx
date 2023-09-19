/* eslint-disable @next/next/no-img-element */
import React from 'react';
import myImage from '../public/images/Ahmad.png';
import TextAnimation from './typewriterAnimation';

function HomeComponent() {
  const animatedText = "Software Engineer, UI/UX Designer, and a Tech Enthusiast"; // Define the text to animate

  return (
    <div>
      <div className="flex ml-6 mt-6 font-semibold">
        <div className="ml-10 font-semibold mt-6 text-2xl text-indigo-900">
          <div className='ml-6 font-bold text-[20px]'>Hello World! </div>
          <div className='ml-6 my-2 font-bold text-5xl'>I am Ahmad Issa</div>
          <div className='ml-6'> <TextAnimation  textToAnimate={animatedText} /> </div> 
          <div className="ml-6 mt-4 font-medium text-base">
            I am a software developer from Jordan, with a passion for designing and building web applications.
            <div className="mt-2"/>
            I enjoy working on projects that challenge me to innovate and deliver high-quality software solutions.
          </div>
        </div>
        <img className="w-96 h-96 ml-12 " src={myImage.src} alt="My Image" />
      </div>
    </div>
  );
}

export default HomeComponent;
