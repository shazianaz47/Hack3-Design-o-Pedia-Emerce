import React from 'react'
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const TopHeader= ()=> {
  return (
    <div className='w-[full] h-[58px] bg-[#252842] flex justify-between items-center pl-[24px] pr-[24px]'>
        <div className='flex text-[#FFFFFF]  items-center'><LuPhone />
            <h6 className='font-[700] text-[14px] gap-[0.5] leadding-[24px]'>(225) 555-0118</h6>
            <div className='w-[260px] h-[44px]gap-[5px] flex items-center ml-5'><AiOutlineMail />
                <h6 className='font-[700] text-[14px] gap-[0.5] leadding-[24px]'>michelle.rivera@example.com</h6>
           
            </div>
        </div>

        <div >
          <p className='text-[#FFFFFF] font-[700] text-[14px] gap-[0.5] leading-[24px] space-x-[0.5]'>Follow Us  and get a chance to win 80% off</p>
        </div>

        <div className='flex gap-[5px] text-white'>
          <p>Follow Us  :</p>
         
          
          <div className=' flex gap-[10px] text-white'>
         <a href=''> <FaInstagram /></a>
         <a href=''> <FiYoutube /></a>
         <a href='https://www.facebook.com/'><FaFacebook /></a>
         <a href=''> <FaTwitter /></a>
          </div>

          
      
        </div>
    </div>
  
  
    
  );
}

export default TopHeader