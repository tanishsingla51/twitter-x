import { IoSettingsOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";

const CreatePost = () => {
  return (
    <div>
      <button className="flex border border-solid border-gray-100 w-[100%] ">
        <button className="p-2 px-24   bg-white text-black py-4  rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out ">
          <h2 className="font-bold">For you</h2>
        </button>

        <button className="p-2 px-24   bg-white text-black py-4  rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <h2 className="font-bold">Following</h2>
        </button>

        <div className="p-4  bg-white text-black py-4 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          <IoSettingsOutline size="20px" />
        </div>
      </button>

      <div className="w-[100%] h-40 border border-solid border-gray-100  items-center relative">
        <Avatar
          name="Tanish"
          size="40"
          className="rounded-full p-[8px] mb-4 cursor-pointer"
        />
        <input
          type="text"
          placeholder=" What's happening?"
          className="mx-2 w-[90%] p-4 pb-2 border-none text-lg outline-none mt-2"
        />

        <div>
          <CiImageOn
            size="30px"
            className="bottom-0 left-0 absolute m-6 ml-16 text-blue-400 cursor-pointer"
          />
          <MdOutlineGifBox
            size="30px"
            className="bottom-0 left-0 absolute m-6 ml-32 text-blue-400 cursor-pointer"
          />
          <button className="bg-blue-400 text-white px-4 py-2 rounded-full font-bold absolute bottom-0 right-0 m-6 ml-4 text-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
