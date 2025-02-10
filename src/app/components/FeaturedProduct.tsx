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
            <div className='flex items-center justify-center'>
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

        <div className='flex items-center justify-center'>
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







// import React from 'react';
// import Image from 'next/image';
// import { FaRegCircle } from "react-icons/fa";

// const FeaturedProduct = () => {
//   const products = [
//     { src: "/images/fixed-height.png" },
//     { src: "/images/product-cover-5.png" },
//     { src: "/images/product-3.png" },
//     { src: "/images/product-4.png" },
//     { src: "/images/product-5.png" },
//     { src: "/images/product-6.png" },
//     { src: "/images/product-7.png" },
//     { src: "/images/product-8.png" }
//   ];

//   return (
//     <main className="flex flex-col items-center px-4 py-10 bg-gray-100">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800">BESTSELLER PRODUCTS</h2>
//         <p className="text-gray-600">Featured Products</p>
//         <p>Problems trying to resolve the conflict between</p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl w-full">
//         {products.map((product, index) => (
//           <div key={index} className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
//             <Image src={product.src} width={200} height={300} alt="Product Image" className="rounded-md" />
//             <h1 className="mt-2 text-lg font-semibold">Graphic Design</h1>
//             <p className="text-gray-600">English Department</p>
//             <p className="text-lg font-bold">
//               <span className="text-red-500 line-through mr-2">$16.48</span>
//               <span className="text-green-500">$6.48</span>
//             </p>
//             <div className='flex gap-2 mt-2'>
//               <FaRegCircle className="text-[#23A6F0] text-lg" />
//               <FaRegCircle className="text-[#23856D] text-lg" />
//               <FaRegCircle className="text-[#E77C40] text-lg" />
//               <FaRegCircle className="text-[#252B42] text-lg" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default FeaturedProduct;
