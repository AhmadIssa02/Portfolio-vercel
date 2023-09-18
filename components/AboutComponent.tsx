// MyComponent.jsx
import React from 'react';
import myImage from '../images/Ahmad.png';
function HomeComponent() {
  return (
    <div>
      
<hr className="mt-8 mx-12 h-0.5 border-t-0 w-96 bg-gradient-to-r from-indigo-400 to-indigo-900 opacity-100 dark:opacity-50" />
          <div className="flex font-semibold justify-between  ">
            <div className="ml-12 font-semibold mt-12 text-3xl text-indigo-900">Hello, I am Ahmad Issa, <br></br> a software engineer
              <div className=" mt-6 text-base">
                I am a Jordanian developr with passion for designing and building web application. 
                  <br />
                I enjoy working on projects that challenge me to innovate and deliver high-quality software solutions.
              </div>
            </div>
            <img className=" sb-16 w-96 h-96 mr-6" src={myImage.src} alt="My Image" />
          </div>
    </div>
  );
}

export default HomeComponent;

