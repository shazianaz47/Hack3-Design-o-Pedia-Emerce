import React from 'react';

function GreenDiv() {
  return (
    <div className="w-full min-h-[709px] bg-white flex justify-center items-center p-4">
      {/* Main container */}
      <div className="w-full max-w-[1440px] h-full flex flex-col md:flex-row bg-[#23856D] rounded-md overflow-hidden">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:pl-20 text-white">
          <p className="text-sm uppercase tracking-wide mb-4 md:ml-10">Summer 2020</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:ml-10">
            Vita Classic Product
          </h2>
         
          <p className="mb-6 w-full md:w-[341px]">
            We know how large objects will act. We know how our objects will act. We know.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:pl-5">
            <p className="text-2xl font-semibold px-4 py-2 bg-white text-[#23856D] rounded-md">$16.48</p>
            <button className="px-6 py-3 bg-[#2DC071] text-white rounded hover:bg-green-500 w-full sm:w-auto">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Green1.png')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default GreenDiv;
