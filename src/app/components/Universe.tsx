import React from 'react'

function Universe() {
  return (
    <main>
              <div className="w-full h-[709px] bg-white flex justify-center items-center">
                {/* Main container */}
                <div className="w-[1440px] h-full flex bg-[#FAFAFA] rounded-md overflow-hidden">
                  
                  {/* Image Section */}
                  <div
                    className="w-1/2 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/UNIVERSE.png')",
                    }}
                  >
                  </div>
                  
                  
                  {/* Text Section */}
                  <div className="w-1/2 flex flex-col justify-center pl-20 mx-10 text-gray-600">
                    <p className="text-sm uppercase tracking-wide ml-10 mb-10">Summer 2020</p>
                    <h2 className="text-6xl font-bold text-[#252B42] mx-10 mb-10">
                    Part of the Neural 
                    Universe</h2>
                   
                    <p className=" pl-10 mb-6 w-[341px] h-[40px] text-[#737373]">
                      We know how large objects will act. We know how are objects will act. We know.
                    </p>
                    <div className='flex mt-8 gap-2 w-[156px] h-[52px] '>
                    <button className="mx-10 px-12 pt-2 py-6 rounded-sm bg-[#2DC071] text-white hover:bg-green-500 font-bold">
                    BUY NOW
                    </button>
                    <button className="mx-10 px-12 py-6 pt-2 rounded-sm bg-white text-[#2DC071] text-center font-bold">
                      READ MORE
                    </button>
                    </div>
                  </div>
          
                  
                </div>
              </div>
            );
    </main>
  )
}

export default Universe