import React from 'react'
import { IoPlayOutline } from "react-icons/io5";
const VideoSection = () => {
  return (
    <div>

    {/* Section 4: Video Section */}
    <div className="pic w-full h-auto bg-cover bg-center relative px-4 py-8 md:px-16 md:py-16 flex items-center justify-center">
                        <div
                            className="relative flex items-center justify-center bg-cover rounded-[20px] w-full max-w-[989px] h-[340px] md:h-[540px]"
                            style={{ backgroundImage: "url('/images/Video.png')" }}
                        >
                            <div className="absolute inset-0"></div>
                            <div>
                                <button className="w-12 md:w-16 h-12 md:h-16 bg-[#23A6F0] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition">
                                    <IoPlayOutline />
                                </button>
                            </div>
                        </div>
                    </div>

    </div>
  )
}

export default VideoSection