import React from 'react'
import Image from 'next/image'

function Hero () {
  return (
    <main >
    <div className="relative bg-cover bg-center bg-no-repeat h-screen"
    
      style={{backgroundImage:" url('/images/cover1.jpg')",}} > 
      
          <div className=' w-full justify-evenly pl-[20%] pt-[15%]'>
           {/* Text Content */}
              <div className="relative z-10 flex flex-col items-start justify-center h-full px-2 py-2 gap-6 text-white"> 
                <h6 className='w-[122px] h-[24px] text-[16px] font-bold'>SUMMER 2020</h6>
                <h1 className="w-[548] h-[80px] text-7xl font-bold" >NEW COLLECTION</h1>
                <div className='flex flex-col pt-10 '>
                <h6 className="mt-4 text-lg " >We know how large objects will act,</h6>
                <h6>but things on a small scale.</h6>
                </div>
                
                <button className=' text-center mt-6 px-8 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600'>SHOP NOW</button>
              </div>
          </div>
     </div>  
     </main>
  );
}

export default Hero ;
