import React from "react";

const FAQ = () => {
  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pricing FAQs</h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="text-blue-500 mr-2">›</span> the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official 
                consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
