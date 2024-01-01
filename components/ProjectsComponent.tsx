// MyComponent.jsx
import React from 'react';
function HomeComponent() {
  return (
    <div className='flex flex-col items-center '>
        <div className="flex justify-center items-center w-full my-8"> 
          <div className="flex space-x-10 md:space-x-16 lg:space-x-32">
            <a href="https://ninja-co.live/">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 font-bold bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
              <h2 className="text-white text-base md:text-lg lg:text-2xl"> Ninja-co.live </h2>
              </div>
            </a>
            <a href = "https://github.com/AhmadIssa02/AhmadIssa02-Pacman-Search-Agents-AI-Alogrithms">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 font-bold bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
                <h2 className="text-white text-base md:text-lg  lg:text-2xl"> Pacman AI </h2>
              </div>
            </a>
          </div>
        </div>
        <a href = "https://github.com/AhmadIssa02">
          <div className="w-64 h-8 mb-10 font-bold text-white bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
            My Github Account
          </div>
        </a>
    </div>
  );
}

export default HomeComponent;

