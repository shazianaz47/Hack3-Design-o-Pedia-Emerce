"use client"
import { useState } from "react";
import Link from "next/link";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full px-4 py-12 md:py-20 lg:py-24 text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-500 uppercase tracking-wide font-semibold">
          PRICING
        </p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
          Simple Pricing
        </h1>
        
        {/* Breadcrumb */}
        <div className="text-gray-500 mt-2">
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span> &gt; Pricing</span>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl mt-10 p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Pricing
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mt-6 space-x-3">
          <span className={`text-sm ${!isYearly ? "font-bold text-gray-900" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center"
          >
            <span
              className={`absolute bg-white w-5 h-5 rounded-full shadow-md transition-transform transform ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? "font-bold text-gray-900" : "text-gray-500"}`}>
            Yearly
          </span>
        </div>

        {/* Discount Button */}
        <button className="mt-4 px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Save 25%
        </button>
      </div>
    </section>
  );
};

export default Pricing;
