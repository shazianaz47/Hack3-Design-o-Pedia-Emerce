import React from "react";
import ComponyLogo from "../shop/componyLogo";

const Pricing = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-gray-800 dark:text-white text-4xl font-bold">Pricing Plans</h2>
        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Choose a plan that suits your needs
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Free Plan */}
          <div className="border p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FREE</h3>
            <p className="text-gray-500 mt-2">Organize across all apps by hand</p>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">0$</h4>
            <p className="text-gray-500">Per Month</p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Unlimited product updates</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border p-6 rounded-xl bg-blue-900 text-white shadow-lg">
            <h3 className="text-lg font-semibold">STANDARD</h3>
            <p className="text-gray-200 mt-2">Organize across all apps by hand</p>
            <h4 className="text-3xl font-bold mt-4">9.99$</h4>
            <p className="text-gray-200">Per Month</p>
            <ul className="mt-4 space-y-2">
              <li>✅ Unlimited product updates</li>
            </ul>
            <button className="mt-6 bg-white text-blue-900 py-2 px-6 rounded-full hover:bg-gray-200">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PREMIUM</h3>
            <p className="text-gray-500 mt-2">Organize across all apps by hand</p>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">19.99$</h4>
            <p className="text-gray-500">Per Month</p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Unlimited product updates</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-12">
          <h3 className="text-gray-700 dark:text-gray-300 text-lg">Trusted By Over 4000 Big Companies</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <ComponyLogo/>
            {/* <img src="/logos/hooli.svg" alt="Hooli" className="h-10" />
            <img src="/logos/lyft.svg" alt="Lyft" className="h-10" />
            <img src="/logos/stripe.svg" alt="Stripe" className="h-10" />
            <img src="/logos/aws.svg" alt="AWS" className="h-10" />
            <img src="/logos/reddit.svg" alt="Reddit" className="h-10" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
