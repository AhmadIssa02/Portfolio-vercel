// MyComponent.jsx
import React from 'react';
import myImage from '../images/Ahmad.png';
import ninjaco from '../images/ninjaco.png';
function HomeComponent() {
  return (
    <div>
      
        <hr className="mt-8 mx-12 h-0.5 border-t-0 w-96 bg-gradient-to-r from-indigo-400 to-indigo-900 opacity-100 dark:opacity-50" />
        <div className="flex justify-center items-center w-full h-72 my-8"> 
          <div className="flex space-x-4">
            
            <a href="https://ninja-co.live/">
              <div className="w-64 h-64 mr-48 font-bold bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300">
              <h2 className="text-white text-2xl"> Ninja-co.live </h2>
            </div>
            </a>
            <div className="w-64 h-64 font-bold bg-gradient-to-r from-stone-700 to-indigo-800 rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300">
              <h2 className="text-white text-2xl"> Pacman AI </h2>
            </div>
          </div>
        </div>
          <div className='bg-gray-100 h-6'> </div>

    </div>
  );
}

export default HomeComponent;

