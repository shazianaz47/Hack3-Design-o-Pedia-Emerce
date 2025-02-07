import React from "react";

function Universe() {
  return (
    <main className="flex justify-center items-center bg-white py-10">
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#FAFAFA] rounded-md overflow-hidden">
        
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/UNIVERSE.png')",
          }}
        ></div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-8 text-gray-600">
          <p className="text-sm uppercase tracking-wide mb-4 text-center md:text-left">
            Summer 2020
          </p>
          <h2 className="text-3xl md:text-6xl font-bold text-[#252B42] mb-4 text-center md:text-left">
            Part of the Neural Universe
          </h2>
          <p className="text-[#737373] mb-6 text-center md:text-left">
            We know how large objects will act. We know how are objects will act. We know.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-sm bg-[#2DC071] text-white hover:bg-green-500 font-bold w-full sm:w-auto">
              BUY NOW
            </button>
            <button className="px-6 py-3 rounded-sm bg-white text-[#2DC071] border border-[#2DC071] font-bold w-full sm:w-auto">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Universe;
