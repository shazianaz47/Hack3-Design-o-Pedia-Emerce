import React from 'react'

const WorkWithUs = () => {
  return (
    <div>
        
        <div className="relative flex flex-col bg-[#2A7CC7]  md:flex-row justify-between items-center w-full h-auto md:h-[636px]">


                    {/* Text Section */}
                    <div className="flex flex-col text-white justify-center items-center md:items-start w-full md:w-1/2 p-6 md:p-12 space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">WORK WITH US</h1>
                        <h2 className="text-2xl md:text-3xl">Now Lets grow Your</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                        </p>
                        <button className="px-6 py-2  text-white border-[1px] border-white  rounded hover:bg-[#2A7CC7] ">
                            Button
                        </button>
                    </div>


                    {/* Image Section */}
                    <div
                        className="hidden md:block w-1/3 h-full bg-cover"
                        style={{
                            backgroundImage: "url('/images/workwithus.png')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </div>
            </div>


   
  )
}

export default WorkWithUs