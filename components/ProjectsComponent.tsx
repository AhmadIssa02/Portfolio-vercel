// MyComponent.jsx
import React from 'react';
import myImage from '../images/Ahmad.png';
import ninjaco from '../images/ninjaco.png';
function HomeComponent() {
  return (
    <div className='items-center'>
        <div className="flex justify-center items-center w-full h-72 my-8"> 
          <div className="flex space-x-4">
            <a href="https://ninja-co.live/">
              <div className="w-64 h-64 mr-36 font-bold bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
              <h2 className="text-white text-2xl"> Ninja-co.live </h2>
              </div>
            </a>
            <a href = "https://github.com/AhmadIssa02/AhmadIssa02-Pacman-Search-Agents-AI-Alogrithms">
              <div className="w-64 h-64 font-bold bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
                <h2 className="text-white text-2xl"> Pacman AI </h2>
              </div>
            </a>
          </div>
        </div>
        <a href = "https://github.com/AhmadIssa02">
          <div className="w-64 h-8 mb-10 ml-72 font-bold text-white bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500">
            My Github Account
          </div>
        </a>
          

    </div>
  );
}

export default HomeComponent;

