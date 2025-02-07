import { client } from "@/sanity/lib/client"
import Image from "next/image";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/app/types/Product";




interface ProductPageProps{
    params:Promise<{slug:string}>
}

async function getProduct(slug : string) : Promise<Product | null> {
 return client.fetch(
    groq`*[_type = = "product" && slug = = $slug][0]{
            _id,
             title,
             price,
             description,
             image
    }`,{slug}
 );  
}

 export default async function ProductPage({params} : ProductPageProps){
 const {slug} = await params;
 const product = await getProduct(slug);
 if (!product){
    return <div className="text-center text-red-500">Product Not Found</div>;
 }

return (
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square">
                {product?.imageUrl && (
                    <Image
                    src ={urlFor(product.imageUrl).url()}
                    alt ={product.title}
                    width = {500}
                    height ={500}
                    className="rounded-lg shadow-md"
                    />
                )}
            </div>
             <div className="flex flex-col gap-8"> 
                <h1 className="text-4xl font-bold">
                    {product.title}
                 </h1>
                 <p className="text-2xl font-sans">
                    ${product.price}                </p>
            <p className="text-lg text-gray-600">
                {product.description}</p>
             </div>
        </div>
    </div>
)
}






