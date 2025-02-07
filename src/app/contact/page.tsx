
import Link from "next/link";
import Image from "next/image";


import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";


export default function Contact() {
  return (
    <div>

      <div >
        {/* Main Content */}
        <div className=" flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[80px] mt-10 lg:mt-[104px] px-4 lg:px-0 max-w-[1050px] mx-auto ">
          {/* Text Section */}
          <div className="flex flex-col gap-6 lg:gap-[35px] w-full lg:w-[599px]">
            <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
            <h1 className="text-center w-full text-[58px] leading-[80px] font-bold text-[#252B42] tracking-[0.2px]">
              Get in touch today!
            </h1>


            <h4 className=" w-full text-center text-[20px] leading-[30px] text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div>

              <h3 className="text-[16px] font-bold text-[#252B42]">
                <span className="flex text-center  transition-all duration-300 hover:scale-105">Phone: +92311824422 </span>
              </h3>



              <h3 className="text-[16px] font-bold text-[#252B42]  transition-all duration-300 hover:scale-105">
                Fax: +451 215 215
              </h3>
            </div>
            <div className="flex justify-center items-center gap-8 w-full h-full font-bold  transition-all duration-300 hover:scale-105">
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <TiSocialInstagram />
              </Link>
              <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <TiSocialYoutube />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <TiSocialFacebook />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <TiSocialTwitter />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[800px]  transition-all duration-300 hover:scale-105">
            <Image src="/images/none.png" alt="family pic" width={500} height={500} />
          </div>
        </div>
      </div>
      {/* OFFICE AND CONTACT */}
      <div className="w-full h-auto flex justify-center items-center bg-[#FFFFFF] py-8">
        <div className="w-full max-w-[1050px] h-auto flex flex-col gap-[80px] items-center">
          {/* Header Section */}
          <div className="w-full max-w-[633px] h-auto flex flex-col gap-[10px] items-center text-center">
            <h6 className="text-[14px] font-Montserrat font-bold leading-[24px] tracking-[0.2px] text-[#252B42]">
              VISIT OUR OFFICE
            </h6>
            <h2 className="text-[40px] font-Montserrat font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
              We help small businesses with Inovative ideas
            </h2>
          </div>

          {/* Cards Section */}
          <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
            {/* Card 1 */}
            <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg  transition-all duration-300 hover:scale-105">
              {/* Icon */}
              <Image src="/images/contact.png" alt="family pic" width={80} height={50}/>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  Phone: +923118274522
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>

            {/* Card 2 */}
            <div className="max-w-[329px] w-full h-auto bg-[#252B42] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg  transition-all duration-300 hover:scale-105">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image src="/images/location.png" alt="family pic" width={500} height={500} />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                  1234 KARACHI Sindh, Pakistan
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-white">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>

            {/* Card 3 */}
            <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg  transition-all duration-300 hover:scale-105">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image src="/images/Email.png" alt="family pic" width={500} height={500}/>
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  shazianaz2417@gmail.com
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Last Div */}
      <div className="w-full h-auto bg-white flex justify-center items-center py-[80px]">
        <div className="w-full max-w-[1050px] flex flex-col items-center justify-center gap-[36px] px-4">
          {/* Arrow */}
          <div className="w-[72px] h-auto flex justify-center">
            <Image src="/images/Arrow 2.png" alt="family pic" width={500} height={500} />
          </div>

          {/* Text and Button Section */}
          <div className="w-full max-w-[607px] h-auto flex flex-col items-center text-center gap-[16px]">
            {/* Heading */}
            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
              WE CAN NOT WAIT TO MEET YOU
            </h5>
            {/* Main Title */}
            <h1 className="font-Montserrat font-bold text-[40px] lg:text-[58px] leading-[48px] lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
              Lets Talk
            </h1>
            {/* Button */}
            <button className="rounded-[5px] py-[12px] px-[20px] lg:py-[15px] lg:px-[40px] bg-[#23A6F0] text-white font-Montserrat font-bold text-[14px] leading-[22px]  transition-all duration-300 hover:scale-105">
              Try it free now
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}