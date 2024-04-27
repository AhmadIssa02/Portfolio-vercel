'use client'

import PageMd from ".//pagemd"
import PageSm from ".//pagesm"
export default function Home() {

  return (
    <div className="font-body">
      <div className="bg-primary-color text-secondary-color poppins-semibold min-h-max h-max w-full min-w-full hidden md:block ">
        <PageMd />
      </div>
      <div className="bg-primary-color text-secondary-color poppins-normal min-h-screen h-full  block md:hidden ">
        <PageSm /> 
      </div>
    </div>
  );
}

