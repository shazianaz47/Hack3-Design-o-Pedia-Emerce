import React from 'react'
import Image from 'next/image'
const ComponyLogo = () => {
  return (
   
        
 <div className="companies flex flex-wrap justify-center items-center mx-auto sm:flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 p-4">

       <Image src={"/images/v1.png"} alt="logo-1" width={300} height={300} className=" w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
       <Image src={"/images/v2.png"} alt="logo-2" width={300} height={300} className=" w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
       <Image src={"/images/v3.png"} alt="logo-3" width={300} height={300} className=" w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
       <Image src={"/images/v4.png"} alt="logo-4" width={300} height={300} className=" w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
       <Image src={"/images/v5.png"} alt="logo-5" width={300} height={300} className=" w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
       <Image src={"/images/v6.png"} alt="logo-6" width={300} height={300} className=" w-full sm:w-1/2 md:w-auto h-[5rem] object-contain hover:scale-105 transition-transform duration-300" />
       </div>

   
  )
}

export default ComponyLogo