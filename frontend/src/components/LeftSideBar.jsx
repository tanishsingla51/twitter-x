import { x1 } from "./Imports.jsx";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { RiNotification4Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { SlEnvolope } from "react-icons/sl";
import { SiGoogleassistant } from "react-icons/si";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="w-[25%] position:fixed">
      <button className="my-2 bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
        <img src={x1} alt="x" width={"30px"} />
      </button>

      <div>
        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <GoHomeFill size="35px" />
          <h1 className="mx-4 font-extrabold text-xl">Home</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <FaSearch size="25px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Explore</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <RiNotification4Fill size="30px" className="mx-1" />
          <h1 className="mx-4 font-bold text-xl">Notifications</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <SlEnvolope size="25px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Messages</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <SiGoogleassistant size="25px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Grok</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <MdOutlineFeaturedPlayList size="27px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Lists</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <CiBookmark size="30px" className="mx-1.5" />
          <h1 className="mx-3 font-bold text-xl">Bookmarks</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <FaUserGroup size="25px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Communities</h1>
        </button>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <BsTwitterX size="25px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Premium</h1>
        </button>

        <Link
          to={`/profile/${user?._id}`}
          className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out"
        >
          <CgProfile size="35px" className="mx-0.5" />
          <h1 className="mx-4 font-bold text-xl">Profile</h1>
        </Link>

        <button className="flex items-center my-4  bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <CiCircleMore size="35px" className="mx-0.5" />
          <h1 className="mx-4 font-bold text-xl">More</h1>
        </button>
      </div>

      <div>
        <button className="bg-blue-400 text-white px-24 py-4 rounded-full font-bold ">
          Post
        </button>
      </div>

      <div>
        <button className="flex items-center my-[45px] bg-black text-white rounded-full px-16 py-4 mr-8">
          <MdLogout size="25px" className="mx-1.5" />
          <h1 className="mx-4 font-bold text-xl">Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
