/* eslint-disable @next/next/no-img-element */
import React from 'react';
import myImage from 'public/images/Ahmad.png';
// import TextAnimation from './typewriterAnimation';

function HomeComponent() {
  const animatedText = "Software Engineer, UI/UX Designer, and a Tech Enthusiast"; // Define the text to animate

  return (
    <div>
      <div className="flex flex-row mt-1 lg:ml-6 lg:mt-6 font-semibold">
        <div className="ml-3 sm:ml-4 lg:ml-10 font-semibold mt-6 text-lg lg:text-2xl text-black">
          <div className='mx-1 lg:ml-6 font-bold text-base md:text-2x lg:text-3xl'>Hello World! </div>
          <div className='mx-1 lg:ml-6 my-2 font-bold text-lg md:text-3xl lg:text-5xl'>I am Ahmad Issa</div>
          <div className='mx-1 lg:ml-6 text-sm md:text-lg lg:text-xl'>  Software Engineer </div> 
          {/* <TextAnimation  textToAnimate={animatedText} /> */}
          <div className="ml-2 pb-10 lg:ml-6 mt-4 font-medium text-xs md:text-base lg:text-lg">
            I am a software developer from Jordan, with a passion for designing and building web applications.
            <div className="mt-2"/>
            I enjoy working on projects that challenge me to innovate and deliver high-quality software solutions.
          </div>
        </div>  
        <img className="mx-auto w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mt-auto md:mt-4  " src={myImage.src} alt="My Image" />
      </div>
    </div>
  );
}

export default HomeComponent;
