// MyComponent.jsx
import React from 'react';
import myImage2 from '../public/images/myImage2.png';
function HomeComponent() {
  return (
    <div>
      
{/* <hr className="mt-8 mx-12 h-0.5 border-t-0 w-96 bg-gradient-to-r from-indigo-400 to-indigo-900 opacity-100 dark:opacity-50" /> */}
          <div className="flex font-semibold">
            <div className=" ml-16 mr-6 mt-10 text-4xl text-indigo-900"> Ahmad Issa <br></br> 
              <div className=" mb-8 mt-4 text-xs">
              Hey there, I am Ahmad Issa – your friendly neighborhood computer science expert and all-around enthusiast! 🥳
              <br/><br/>
              I am a senior student pursuing a degree at the Lebanese American University. I am passionate about technology, coding, and exploring the digital world. Coding is more than just a hobby for me; it is a way to bring ideas to life and solve real-world problems. I thrive on taking on significant projects that challenge my skills and push me to learn and grow as a developer. 🖥️
              <br/><br/>
              Some people might call me an extrovert, and they are absolutely right! I love meeting new people, making friends, and having a good time. I believe that my social skills are top-notch, and I thrive in group settings. Let's chat, laugh, and make some awesome memories together! 🗣️
              <br/><br/>
              I am dedicated to staying up-to-date with the latest trends and technologies and to embark on new adventures, both in my academic journey and my personal development, as I strive to become the best version of myself.
              <br/><br/>
              Feel free to connect with me if you share similar interests or if you would like to collaborate on a project. Let us learn and grow together!
              </div>
            </div>
            <img className=" mt-8 mb-6 rounded-3xl w-96 h-96 mr-8" src={myImage2.src} alt="My Image" />
          </div>
    </div>
  );
}

export default HomeComponent;

