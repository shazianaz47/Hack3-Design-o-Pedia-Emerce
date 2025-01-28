import React from 'react'
import Image from 'next/image'
import { FaRegCircle } from "react-icons/fa";

const FeaturedProduct = () => {
  return (
    <main>
       <div className='justify-items-center place-items-center'>
{/*text  */}
            <div className=" text-center  mt-6 pt-4  ">
             <h2 className= "text-xl font-semibold" >BESTSELLER PRODUCTS </h2>
             <p className="text-gray-600 "> 
              Featured Products</p>
              <p>Problems trying to resolve the conflict between </p>
             </div>
  
{/* Best Salling Product */}
            <div className=' flex items-center justify-center  ' >
              <div className='w-[238px] h-[639px]'>
              <Image src="/images/fixed-height.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                 <div className='flex space-x-4'>
                      <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                 </div>
              </div>

              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-cover-5.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                 <div className='flex gap-2'>
                 <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                  </div>
             </div>

              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-3.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                    <div className='flex gap-2'>
                    <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                    </div>
              </div>

              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-4.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                    <div className='flex gap-2'>
                    <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                    </div>
              </div>
        </div>

        <div className=' flex items-center justify-center  ' >
              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-5.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                 <div className='flex gap-2'>
                 <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                 </div>
              </div>

              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-6.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                 <div className='flex gap-2'>
                 <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                  </div>
             </div>

              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-7.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                    <div className='flex gap-2'>
                    <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                    </div>
              </div>

              <div className='w-[238px] h-[639px]'>
              <Image src="/images/product-8.png"
              width={200}
              height={300}
              alt="Model Images"/>
              <h1>Graphic Design</h1>
              <p>English Department</p>
              <p><span>$16.48</span>
              <span>$6.48</span></p>
                    <div className='flex gap-2'>
                    <FaRegCircle className="text-[#23A6F0] text-1xl"/>
                      <FaRegCircle className="text-[#23856D] text-1xl"/>
                      <FaRegCircle className="text-[#E77C40] text-1xl"/>
                      <FaRegCircle className="text-[#252B42] text-1xl"/>
                    </div>
              </div>
            </div>




        </div>
    </main>
  )
}

export default FeaturedProduct