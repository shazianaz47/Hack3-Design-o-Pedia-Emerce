import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import ComponyLogo from "../shop/componyLogo";


const MeetOurTeam = () => {
  return (
    <div className="meet2n">

      <div className="aboutSec1 grid grid-cols-1 md:grid-cols-3 gap-[3.5rem] place-items-center py-20">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>


        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser2.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>


        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/teamuser3.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>

      </div>


      <div className="meetsec2 flex bg-gray-100 flex-col w-full m-[0.25rem]  items-center justify-center  p-2 rounded-lg shadow-lg">

        <div>
          <h1 className="font-bold text-3xl text-center">
            Big Companies Are Here
          </h1>

          <div className="text-center text-sm text-gray-500 p-5">
            <p>Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        </div>
        <ComponyLogo/>

        
      </div>
    </div>
  );
};

export default MeetOurTeam;