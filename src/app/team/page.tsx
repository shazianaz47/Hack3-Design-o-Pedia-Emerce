import React from 'react'
import FreeTrial from '../pricing/FreeTrial'
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import ComponyLogo from "../shop/componyLogo";
import Link from "next/link";
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';


const Team = () => {
  return (
    <div className="meet2n">
        <div className="container mx-auto px-4">
      {/* Text Section */}
      <div className="text-center">
        <h6 className="text-[10px] pt-6">WHAT WE DO</h6>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 p-5">
          Innovation tailored for you
        </h1>
        <span className="text-xl md:text-2xl text-gray-600">
          Home <IoIosArrowForward className="text-gray-400 inline" /> Team
        </span>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
        {/* Left Large Image */}
        <div className="relative">
          <Image 
            src="/images/team1.png"
            alt="team"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Right Small Images Grid */}
        <div className="grid grid-cols-2 gap-2">
          <Image 
            src="/images/team2.png"
            alt="team"
            width={300}
            height={250}
            className="w-full h-auto"
          />
          <Image 
            src="/images/team3.png"
            alt="team"
            width={300}
            height={250}
            className="w-full h-auto"
          />
          <Image 
            src="/images/team4.png"
            alt="team"
            width={300}
            height={250}
            className="w-full h-auto "
          />
          <Image 
            src="/images/team5.png"
            alt="team"
            width={300}
            height={250}
            className="w-full h-auto"
          />
        </div>
      </div>

        <div><h1  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white  mt-10 p-5 text-center justify-between">Meet Our Team</h1></div>
     
      <div className="aboutSec1 grid grid-cols-1 md:grid-cols-3 gap-[3.5rem] place-items-center py-20">
  
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>


        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser2.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>


        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser3.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>

       {/* Team Member 4 */}
       <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser4.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>


 {/* Team Member 5 */}
 <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser5.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>


 {/* Team Member 6 */}
 <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser6.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>

         {/* Team Member 7 */}
       <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser7.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>

            {/* Team Member 8*/}
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
             <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser8.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
        </div>


 {/* Team Member 9 */}
 <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser9.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </Link>
            <Link href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </Link>
          </div>
         </div>
       </div>

         <div className="meetsec2 flex bg-gray-100 flex-col w-full m-[0.25rem]  items-center justify-center  p-2 rounded-lg shadow-lg">
         <FreeTrial />
         </div>
    
    </div>
    </div>
  )
}

export default Team