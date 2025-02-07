import React from "react";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className="w-full bg-[#252842] text-white py-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      {/* Contact Info */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
        <div className="flex items-center gap-2">
          <LuPhone />
          <h6 className="text-sm font-semibold">(225) 555-0118</h6>
        </div>

        <div className="flex items-center gap-2">
          <AiOutlineMail />
          <h6 className="text-sm font-semibold">michelle.rivera@example.com</h6>
        </div>
      </div>

      {/* Offer Text */}
      <p className="text-sm font-semibold mt-2 md:mt-0">
        Follow Us and get a chance to win 80% off
      </p>

      {/* Social Media Icons */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <p className="text-sm">Follow Us:</p>
        <div className="flex gap-3 text-lg">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FiYoutube /></a>
          <a href="https://www.facebook.com/"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
