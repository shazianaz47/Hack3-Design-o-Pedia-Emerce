import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function Header() {
  return (
    <div className='w-[full] h-[58px] border-outline-5 border-[#DEDEDE] bg-[#ffffff] flex justify-between items-center'>

        {/* logo */}
        <div className='text-bold text-[25px] ml-8'><p>Bandage</p></div>
        
        
            <div>
                <ul className='w-[360px] h-[24px] flex gap-[20px]  mr-10  text-[#000000]'>
                    <li className= 'with-[42px] he[24px] text-[14px] pr-100]'>Home</li>
                    <li className='text-[14px] text-center font-normal w-[38px] h-[24px]'>Shop</li>
                    <li className='text-[14px] text-center font-normal w-[33px] h-[24px]'>About</li>
                    <li className='text-[14px] text-center font-normal w-[33px] h-[24px]'>Blog</li>
                    <li className='text-[14px] text-center font-normal w-[58px] h-[24px]'>Contact</li>
                    <li className='text-[14px] text-center font-normal w-[44px] h-[24px]'>Pages</li>
                </ul>
            </div>
            <div className='flex mr-20'>
                {/* signup/signIn */}
               <div className='flex flex-row gap-[5px] ml-10 '>
               <HiOutlineUser className='w-[15px] h-[40px]'/>
               <p className='w-[119px] h-[24px] pt-2 -ml-2' > Login / Register </p>
               </div>
                {/*communicate Icons  */}
               
               <div className='mr-2 flex gap-[8px] pt-4 '>
               <IoIosSearch  className='w-[18px] h-[20px]'/>
               <IoCartOutline className='w-[18px] h-[20px]'/>
               <CiHeart className='w-[18px] h-[20px]'/>
               </div>
            </div>
            

        </div>

  );
}

export default Header