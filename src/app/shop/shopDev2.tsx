import React from 'react'

function shopDev2() {
    return (
        <div>
            <div className="flex flex-wrap gap-12 py-16 px-20 justify-center">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="w-60 h-[45rem] flex flex-col items-center justify-between">
                        <div
                            className={`w-full h-full bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105 ${index % 12 === 0 ? 'bg-[url(/images/shopDev1.png)]' :
                                index % 12 === 1 ? 'bg-[url(/images/shopDev2.png)]' :
                                    index % 12 === 2 ? 'bg-[url(/images/shopDev3.png)]' :
                                        index % 12 === 3 ? 'bg-[url(/images/shopDev4.png)]' :
                                            index % 12 === 4 ? 'bg-[url(/images/shopDev5.png)]' :
                                                index % 12 === 5 ? 'bg-[url(/images/shopDev6.png)]' :
                                                    index % 12 === 6 ? 'bg-[url(/images/shopDev7.png)]' :
                                                        index % 12 === 7 ? 'bg-[url(/images/shopDev8.png)]' :
                                                            index % 12 === 8 ? 'bg-[url(/images/shopDev9.png)]' :
                                                                index % 12 === 9 ? 'bg-[url(/images/shopDev10.png)]' :
                                                                    index % 12 === 10 ? 'bg-[url(/images/shopDev11.png)]' :
                                                                        'bg-[url(/images/shopDev12.png)]'}`}
                        ></div>

                        <div className="flex flex-col items-center mt-4 ">
                            <h4 className="text-xl font-extrabold mb-2">Graphic Design</h4>
                            <h6 className="text-sm text-gray-500 mb-2">English Department</h6>
                            <p className="text-sm text-gray-500 mb-2">
                                $16.48 <span className="text-green-500">$6.48</span>
                            </p>

                            <div className="flex gap-2 mt-4 transition-transform transform hover:scale-105">
                                {['#23a6f0', '#23856d', '#e77c40', '#252b42'].map((color, idx) => (
                                    <span key={idx} className={`w-8 h-8 rounded-full`} style={{ backgroundColor: color }}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
 export default shopDev2
