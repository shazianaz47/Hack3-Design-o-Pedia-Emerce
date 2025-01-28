import React from 'react';

function GreenDiv() {
  return (
    <div className="w-full h-[709px] bg-white flex justify-center items-center">
      {/* Main container */}
      <div className="w-[1440px] h-full flex bg-[#23856D] rounded-md overflow-hidden">
        {/* Text Section */}
        <div className="w-1/2 flex flex-col justify-center pl-20 text-white">
          <p className="text-sm uppercase tracking-wide ml-10 mb-10">Summer 2020</p>
          <h2 className="text-6xl font-bold ml-10 mb-10">
            Vita Classic Product</h2>
         
          <p className=" pl-10 mb-6 w-[341px] h-[40px]">
            We know how large objects will act. We know how are objects will act. We know.
          </p>
          <div className='flex pl-5 mb-4 gap-12'>
          <p className="text-2xl font-semibold mt-4 px-6 py-3 mb-4 w-[77px] h-[32px]">$16.48</p>
          <button className="mt-4 px-6 bg-[#2DC071] text-white rounded hover:bg-green-500 w-[184px] h-[52px]">
            ADD TO CART
          </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Green1.png')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default GreenDiv;
