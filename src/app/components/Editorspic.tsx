import React from 'react'
import Image from 'next/image'

const EditorsPick = () => {
  return (
    <div className='bg-gray-100 justify-items-center place-items-center  '> 
      <div className='max-w-7xl  max-auto'>
        {/* Title */}
        <div className=" text-center  mb-6">
        <h2 className="text-xl font-semibold">EDITORS PICK </h2>
        <p className="text-gray-600 "> 
         Problems trying to resolve the conflict between</p>
      </div>
                                                          
      {/* Grid */}
      <div className="  flex justify-centergrid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Men Section */}
          <div className="relative group">
            <Image
              src="/images/men.png"
              alt="Men"
              width={510}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                MEN
              </button>
            </div>
          </div>

       {/* Women Section */}
       <div className="relative group">
            <Image
              src="/images/women.png"
              alt="Women"
              width={240}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                WOMEN
              </button>
            </div>
          </div>
          <div>

        {/* Accessories Section */}
        <div className="relative group">
            <Image
              src="/images/accessories.png"
              alt="Accessories"
              width={240}
              height={242}
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                ACCESSORIES
              </button>
            </div>
          </div>

        {/* Kids Section */}
        <div className="relative group">
            <Image
              src="/images/kids.png"
              alt="Kids"
              width={240}
              height={242}
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                KIDS
              </button>
            </div>
        </div>
        </div>
      </div>
     </div>
    </div>
   
  )
}

export default EditorsPick;