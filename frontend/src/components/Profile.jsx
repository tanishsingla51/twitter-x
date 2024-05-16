import { IoArrowBack } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

import { useGetProfile } from "../hooks/useGetProfile";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { user, profile } = useSelector((state) => state.user);
  const { id } = useParams();
  useGetProfile(id);

  return (
    <div className="border border-solid border-gray-200 w-[100%]">
      <div className="flex border border-solid border-gray-100 w-[100%]">
        <Link
          to="/"
          className="p-2   bg-white text-black   rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out "
        >
          <IoArrowBack className="m-2 size-6 mr-4" />
        </Link>
        <div>
          <h1 className="font-bold text-bold pt-1 px-2  cursor-pointer hover:underline text-xl">
            {profile?.name}
          </h1>
          <p className="text-gray-500 px-2 text-sm"> 0 posts </p>
        </div>
        <SiTicktick
          size="15px"
          className="text-blue-600 cursor-pointer mr-2 mt-[11px]"
        />
        <FaSquareXTwitter
          size="17px"
          className="text-black cursor-pointer mr-2 mt-[10px]"
        />
      </div>

      <div className="relative">
        <img
          src="https://pbs.twimg.com/profile_banners/44196397/1690621312/1500x500"
          alt="banner"
          className="w-full"
        />
        <img
          src="https://cdn1.img.sputniknews.in/img/07e7/04/0b/1500716_0:0:3074:2048_1440x900_80_0_1_f421d99e9e2fadcabd8d6db348cb9a12.jpg.webp?source-sid=ap_photo"
          alt="Profile"
          className="absolute bottom-0 left-[15%] transform -translate-x-1/2 -mb-16 rounded-full border-4 border-white w-[150px] h-[150px]"
        ></img>
      </div>

      <div className="flex mt-20 ml-5">
        <h1 className="font-bold text-bold pt-1 px-2  cursor-pointer hover:underline text-xl">
          {profile?.name}
        </h1>
        <SiTicktick
          size="15px"
          className="text-blue-600 cursor-pointer mr-2 mt-[11px]"
        />
        <FaSquareXTwitter
          size="17px"
          className="text-black cursor-pointer mr-2 mt-[10px]"
        />
      </div>
      <p className="text-gray-500 px-2 text-sm ml-5">@{profile?.username}</p>
      <div className="flex">
        <FaRegCalendarAlt
          size="15px"
          className="text-gray-500 cursor-pointer mr-2 mt-[15px] ml-7"
        />
        <p className="text-gray-500  text-sm mt-[14px] ml-0.5">
          {" "}
          Joined June 2009{" "}
        </p>
      </div>

      <div className="flex mt-4 items-center">
        <p className="text-black px-2 text-sm ml-5 font-bold hover:underline hover:text-sky-400">
          {" "}
          0 Following{" "}
        </p>
        <p className="text-black px-2 text-sm ml-20 font-bold hover:underline hover:text-sky-400">
          {" "}
          181.3M Followers{" "}
        </p>
        <p className="text-black px-2 text-sm ml-20 font-bold hover:underline hover:text-sky-400">
          {" "}
          150 Subscriptions{" "}
        </p>
      </div>

      <div className="relative flex">
        <button className="bg-black text-white px-4 py-2 rounded-full font-bold absolute bottom-32 right-0 m-6 ml-4 text-bold hover:bg-gray-800">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
