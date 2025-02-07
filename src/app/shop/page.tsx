"use client";
import React,{useEffect, useState} from "react";
import  { createClient }  from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/Product";
import { urlFor } from "@/sanity/lib/image";
import ShopDev1 from  "./shopDev1";
import ShopDev2 from "./shopDev2";
import Label from "./label"
import ComponyLogo from "./componyLogo";



const sanity =createClient({
    projectId: '1wez9r4o',
    dataset:"production",
    apiVersion:"2025-01-13",
    useCdn: true,
});

const ProductCards : React.FC = () => {
    const [product, setProduct]= useState<Product[]> ([]);
    const [cart, setCart] = useState<Product[]>([]); // Added cart state

    const fetchProducts = async () => {
        try{
            const query = `
           *[_type =="product"] {
           _id,
             title,
             price,
             description,
             discountPercentage,
             "imageUrl":productImage.asset ->url,
              tags
             }  
             `;

         const data = await sanity.fetch(query);
         setProduct (data);  
        }catch (error){
            console.error("Error Fetching Product:",error);
        }
    };

    const addToCart = (product:Product) => {
          setCart ((prevCard)=> [...prevCard,product]);
          alert(`${product.title} has been added to your cart!` );
    };



    useEffect(()=> {
        fetchProducts ();
    },[]);
    
    return(
    <>



        

        <ShopDev1/>
        <Label/>
        <ComponyLogo/>
        <ShopDev2/>
        


   
    <div className="min-h-screen bg-gray-50 p-10">
        
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Product From APIs Data</h2>
      
       <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">{product.map((product) =>(
         <div 
             key={product._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

           <Link href={`/product/${product.slug}`}>      
           
            <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
           />
         </Link>

                             Product Details
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                {/* <p className="text-sm text-gray-600 mt-2">{product.description.length}</p> */}
                <div className="flex justify-between items-centre mt-4">
                    <div>
                        <p className="text-lg font-bold text-gray-900">${product.price}</p>
                        {product.discountPercentage > 0 && (
                         <p className="text-sm text-green-600">
                                {product.discountPercentage }% OFF
                         </p>
                        )}
                    </div>
               </div>

                                 {/* tags */}
                    <div className="mt-3 flex flex-wrap gap-2 ">
                        {product.tags.map((tag,index)=>(
                            <span
                            key={index}
                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                          {tag}
                         </span>
                         ))}
                     </div>
                     
                    
                        {/*Add to  cart functionality*/}
            
                     <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue=700"
                     onClick = {() => addToCart(product)}>Add to Cart </button> 
                          
            </div>
         </div>
         
      ))}
 </div>
        
        
                            {/* cart summary*/}
         <div className="mt-12 bg-slate-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>
            {cart.length >0 ?(
         <ul className="space-y-4">
                {cart.map((item,index) => (
                <li
                 key={index}
                 className ="flex justify-between items-center bg-white shadow-sm p-4 rounded-lg"> 
               
                    <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <Image 
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-lg"/>
                </li>
           ))}
          </ul>
    ):(
          <p className="text-black text-centre">Your Cart Is Empty Please Add Product!</p> 
    )}
       </div>
    </div>
 </>   
    );
};
export default ProductCards;