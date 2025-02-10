import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-blue-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-pink-500 hover:text-pink-600">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-3/4 md:flex justify-between space-x-16">
            {/* Column 1 */}
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold text-gray-800">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="hover:text-blue-500">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Carrier</Link></li>
                <li><Link href="#" className="hover:text-blue-500">We are hiring</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Blog</Link></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="hover:text-blue-500">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Carrier</Link></li>
                <li><Link href="#" className="hover:text-blue-500">We are hiring</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Blog</Link></li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold text-gray-800">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="hover:text-blue-500">Business Marketing</Link></li>
                <li><Link href="#" className="hover:text-blue-500">User Analytics</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Live Chat</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Unlimited Support</Link></li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="hover:text-blue-500">iOS & Android</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Watch a Demo</Link></li>
                <li><Link href="#" className="hover:text-blue-500">Customers</Link></li>
                <li><Link href="#" className="hover:text-blue-500">API</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore imp sum dolor Amit.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Shazia Naz All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
