"use client";

import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" relative w-full z-50">
      <div className="flex justify-between items-center p-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Bandage</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMdMenu />
        </button>

        {/* Navigation Links (Hidden on Mobile) */}
        <nav
         className={`md:relative  w-full md:w-auto md:flex bg-white md:bg-transparent flex-col md:flex-row items-center gap-6 p-4 md:p-0 shadow-md md:shadow-none transition-transform
           ${
           menuOpen ? "block" : "hidden"
         }`}
         >
          <ul className="flex flex-col md:flex-row items-center gap-6 text-gray-800">
            <li><Link href="/"><span>Home</span></Link></li>
            <li className="flex items-center">
              <Link href="/shop"><span>Shop</span></Link> <IoMdArrowDropdown />
            </li>
            <li><Link href="/about"><span>About</span></Link></li>
            <li><Link href="/blog"><span>Blog</span></Link></li>
            <li><Link href="/contact"><span>Contact</span></Link></li>
            <li><Link href="/pricing"><span>Pricing</span></Link></li>
          </ul>
        </nav>

        {/* User & Icons */}
        <div className="hidden md:flex items-center gap-6">
          {/* Login/Register */}
          <div className="flex items-center text-blue-500 gap-2">
            <HiOutlineUser className="w-5 h-5" />
            <SignedIn>
            <UserButton />
            </SignedIn>
           <SignedOut>
            <SignInButton />
           </SignedOut>
            {/* <Link href="/">Login / Register</Link> */}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-blue-500">
            <button><IoIosSearch className="w-5 h-5" /></button>
            <button><IoCartOutline className="w-5 h-5" /></button>
            <button><CiHeart className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
