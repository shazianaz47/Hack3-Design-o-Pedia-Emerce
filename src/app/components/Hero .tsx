import React from 'react'
import Image from 'next/image'

function Hero () {
  return (
    <div className='relative w-full justify-evenly  '>

        <div className='pb-6 '>
            {/* Leading Page Image-1 */}
            <img src='/images/1.jpeg' alt='lead Page' width={1440} height={716} className="w-full h-full"></img>
        </div>
     </div>
  )
}

export default Hero 

