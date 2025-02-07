import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EditorsPick = () => {
  return (
    <div className="bg-gray-100 flex justify-center py-10 px-4">
      <div className="max-w-screen-xl w-full">
        
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">EDITORS PICK</h2>
          <p className="text-gray-600">Problems trying to resolve the conflict between</p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Men Section */}
          <div className="relative group">
            <Link href="/">
              <Image src="/images/men.png" alt="Men" width={500} height={500} className="w-full h-auto object-cover rounded-md" />
            </Link>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                MEN
              </button>
            </div>
          </div>

          {/* Women Section */}
          <div className="relative group">
            <Image src="/images/women.png" alt="Women" width={500} height={500} className="w-full h-auto object-cover rounded-md" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                WOMEN
              </button>
            </div>
          </div>

          {/* Accessories Section */}
          <div className="relative group">
            <Image src="/images/accessories.png" alt="Accessories" width={500} height={500} className="w-full h-auto object-cover rounded-md" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                ACCESSORIES
              </button>
            </div>
          </div>

          {/* Kids Section */}
          <div className="relative group">
            <Image src="/images/kids.png" alt="Kids" width={500} height={500} className="w-full h-auto object-cover rounded-md" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                KIDS
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditorsPick;


