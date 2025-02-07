
import Hero from "./components/Hero ";
import FeaturedProduct from "./components/FeaturedProduct";
import GreenDiv from "./components/GreenDiv";
import Universe from "./components/Universe";
import FeatturedPost from "./components/FeaturedPost";
import SHOP from "./shop/page";
import EditorsPick from "./components/Editorspic";


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
