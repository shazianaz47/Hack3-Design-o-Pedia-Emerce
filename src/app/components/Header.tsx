"use client"
import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";


function Header() {
  return (
    <div className='w-full h-[58px]  border-b border-[#DEDEDE] bg-[#ffffff] flex justify-between items-center px-8'>

        {/* logo */}
        <div className='text-[25px] font-bold text-[#252B42]'>
            Bandage</div>

            {/* Navigation Links */}
            <div>
                <ul className='w-[360px] h-[24px] flex gap-[20px] font-normal text-[#000000]'>
                    <li className= 'with-[42px] he[24px] text-[14px] pr-100]'><Link href="/">Home</Link></li>
                    <ol className='flex'>
                    <li className=' text-[14px] text-center font-normal w-[38px] h-[24px]'><Link href="/">Shop</Link></li> 
                    <span><i><IoMdArrowDropdown /></i></span>
                    
                    </ol>
                    <li className='text-[14px] text-center font-normal w-[33px] h-[24px]'><Link href='/'>About</Link></li>
                    <li className='text-[14px] text-center font-normal w-[33px] h-[24px]'><Link href='/'>Blog</Link></li>
                    <li className='text-[14px] text-center font-normal w-[58px] h-[24px]'><Link href='/'>Contact</Link></li>
                    <li className='text-[14px] text-center font-normal w-[44px] h-[24px]'><Link href='/'>Pages</Link></li>
                </ul>
            </div>

            {/* Icons and Login/Register */}
            <div className='flex items-center gap-6 '>
            
               <div className='flex items-center gap-2 text-[#23A6F0]'>
               <HiOutlineUser className='w-[18px] h-[18px]'/>
               <p className="text-[#23A6F0] text-[14px] "><Link href="/" > Login / Register </Link></p>
               </div>

                {/*communicate Icons  */}
               
               <div className=' flex items-center gap-4'>
              <button className='flex'><IoIosSearch  className='w-[18px] h-[18px] text-[#23A6F0]'/><p>1</p></button>
              <button className='flex'><IoCartOutline className='w-[18px] h-[18px] text-[#23A6F0]'/><p>1</p></button>
              <button><CiHeart className='w-[18px] h-[18px] text-[#23A6F0]'/></button>
               </div>
            </div>
            

        </div>

  );
}

export default Header