
 import MeetOurTeam from "./MeetOurTeam";
import ProblemSolving from "./ProblemSolving";
import StateSection from "./StateSection";
import VideoSection from "./VideoSection";
import WorkWithUs from "./workWithUs";

import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 ">
      {/* Background Pink Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/8 -translate-y-1/3 w-64 h-64 md:w-96 md:h-96 bg-pink-300 rounded-full opacity-50 -z-10"></div> 

      <div className="flex mt-10 flex-col md:flex-row items-center md:items-start gap-10"> 
        
        {/* Text Section */}
        <div className=" flex-1 mt-10 text-center md:text-left p-10">
          <p className="text-sm text-gray-500 p-3 ">ABOUT COMPANY</p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 p-3">ABOUT US</h1>
          <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Get Quote Now
          </button>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center relative ">
          <Image 
            src="/Images/about1.png" 
            alt="girl" 
            width={500} 
            height={500} 
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <div>
        <ProblemSolving/>
      </div>
      <StateSection/>
      <VideoSection/>
      <MeetOurTeam/>
      <WorkWithUs/>


      

    </main>
  )
}

export default About


