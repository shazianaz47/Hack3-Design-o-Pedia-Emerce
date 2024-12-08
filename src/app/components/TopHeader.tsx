import React from 'react'
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const TopHeader= ()=> {
  return (
    <div className='w-[full] h-[46px] bg-[#252842] flex justify-between items-center pl-[24px] pr-[24px]'>
        <div className='flex text-[#FFFFFF]  items-center'><LuPhone />
            <h6 className='font-[700] text-[14px] gap-[0.5] leadding-[24px]'>(225) 555-0118</h6>
            <div className='w-[260px] h-[44px]gap-[5px] flex items-center ml-5'><AiOutlineMail />
                <h6 className='font-[700] text-[14px] gap-[0.5] leadding-[24px]'>michelle.rivera@example.com</h6>
           
            </div>
        </div>

        <div>
          <h6 className='text-[#FFFFFF] font-[700] text-[14px] gap-[0.5] leading-[24px] space-x-[0.5]'>Follow Us  and get a chance to win 80% off</h6>
        </div>


        <div className='flex'>
          <h6 className='text-[#FFFFFF] font-[700] text-[14px] gap-[0.5] leading-[24px] space-x-[0.5]'>Follow Us  :</h6>
          <div className='flex items-centergap-3'>

          </div>
          <FaInstagram className='w-[18px] h-[18px] mr-2 text-white ml-3'/>
          <FiYoutube className='w-[18px] h-[18px] mr-2 text-white '/>
          <FaFacebook className='w-[18px] h-[18px] mr-2 text-white '/>
          <FaTwitter className='w-[18px] h-[18px] mr-2 text-white '/>

        </div>
    </div>
  
  
    
  );
}

export default TopHeader