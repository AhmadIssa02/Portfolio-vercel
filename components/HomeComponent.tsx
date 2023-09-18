import React from 'react';
import myImage from '../images/Ahmad.png';
import TextAnimation from './typewriterAnimation';

function HomeComponent() {
  const animatedText = "Software Engineer, UI/UX Designer, and a Tech Enthusiast"; // Define the text to animate

  return (
    <div>
      <hr className="mt-8 mx-12 h-0.5 border-t-0 w-96 bg-gradient-to-r from-indigo-400 to-indigo-900 opacity-100 dark:opacity-50" />
      <div className="flex font-semibold justify-between">
        <div className="ml-6 font-semibold mt-6 text-2xl text-stone-700">
          <div className='ml-6 font-bold text-2xl'>Hello World! </div>
          <div className='ml-6 my-2 font-bold text-5xl'>I am Ahmad Issa</div>
          <div className='ml-6'> <TextAnimation  textToAnimate={animatedText} /> </div> 
          <div className="ml-6 mt-6 font-medium text-base">
            I am a software developer from Jordan, with a passion for designing and building web applications.
            <div className="mt-2"/>
            I enjoy working on projects that challenge me to innovate and deliver high-quality software solutions.
          </div>
        </div>
        <img className="sb-16 w-96 h-96 mr-6" src={myImage.src} alt="My Image" />
      </div>
    </div>
  );
}

export default HomeComponent;
