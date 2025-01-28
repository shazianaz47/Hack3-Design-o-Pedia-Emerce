import React from 'react'
import Image from 'next/image'

function About () {
  return (
    <main className='w-[1050px] h-[545px] gap-[80px]' >

     <div className=' flex w-[1044px] h-[321px] relative left-[135px] gap-[30px] pt-112'>

        <div className='w-[599px] h-[321px] pt-8  relative left-[135px] gap-[12px]'>
        <p className='w-[154px] h-[24px]'>ABOUT COMPANY</p><br/>
        <h1 className='w-[542px] h-[80px]'>ABOUT US</h1>
        <p className='w-[376px] h-[60px]'>We know how large objects will act, 
        but things on a small scale</p>
        <button className='w-[195] h-[52] bg-[#23A6F0] gap-10 rounded-[5px]'>Get Quote Now</button>
        </div>

        <div className=' right-[135px]'>
        <Image 
        src="/Images/about1.png" 
        alt="girl" 
        width={500} 
        height={700} 
        
       />
        </div>
 
    </div>
    </main>
  )
}

export default About