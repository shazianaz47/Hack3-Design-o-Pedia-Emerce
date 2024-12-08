import Image from "next/image";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Hero from "./components/Hero ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
     <TopHeader/>
     <Header/>
     <br/>
     <Hero/>

     <br/><br/>
     <Footer/>

    </div>
    
   
  );
}
