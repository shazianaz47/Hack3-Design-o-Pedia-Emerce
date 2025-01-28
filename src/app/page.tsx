import Image from "next/image";
import EditorsPick from "./components/Editorspic";
import Hero from "./components/Hero ";
import FeaturedProduct from "./components/FeaturedProduct";
import GreenDiv from "./components/GreenDiv";
import Universe from "./components/Universe";
import FeatturedPost from "./components/FeaturedPost";
import SHOP from "./shop/page";





export default function Home() {
  return (
    <div>
    
   <Hero/>
   <br/>
   <EditorsPick/>
   <FeaturedProduct/>
   <SHOP/>    
   <GreenDiv/>
   <Universe/>
   <FeatturedPost/>
   
   </div>
     
     
   
  );
}
