import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const FreeTrial = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Start your 14 days free trial
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        {/* Button */}
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
          Try it free now
        </button>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6 text-2xl text-blue-600">
          <FaTwitter className="hover:text-blue-500 transition" />
          <IoLogoFacebook className="hover:text-blue-500 transition" />
          <FaInstagram className="hover:text-blue-500 transition" />
          <SiLinkedin className="hover:text-blue-500 transition" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;