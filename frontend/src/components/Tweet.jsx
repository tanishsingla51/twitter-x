import Avatar from "react-avatar";
import { SiTicktick } from "react-icons/si";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/tweetSlice";
import { useDispatch } from "react-redux";

export const Tweet = ({ tweet }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    try {
      const response = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());

      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-solid border-gray-100">
      <div>
        <div className="flex h-10">
          <Avatar
            src="https://cdn1.img.sputniknews.in/img/07e7/04/0b/1500716_0:0:3074:2048_1440x900_80_0_1_f421d99e9e2fadcabd8d6db348cb9a12.jpg.webp?source-sid=ap_photo"
            size="40"
            className="rounded-full p-[2px] m-[8px] cursor-pointer"
          />
          <div className="font-bold text-bold pt-4 px-4 pr-2 cursor-pointer hover:underline">
            {tweet?.userDetails[0].name}
          </div>
          <SiTicktick
            size="15px"
            className="text-blue-600 cursor-pointer mr-2 mt-5"
          />
          <FaSquareXTwitter
            size="17px"
            className="text-black cursor-pointer mr-2 mt-5"
          />
          <div className="text-gray-500 pt-4">
            @{tweet?.userDetails[0].username}
          </div>
          <div className="text-gray-500 pt-4 px-2">· 2h</div>
          <BiDotsVerticalRounded
            size="20px"
            className="text-gray-500 cursor-pointer ml-auto mr-4 mt-4"
          />
        </div>

        <div>
          <p className="px-16">{tweet?.description}</p>
        </div>

        <div className="pb-4">
          <div className="flex justify-between w-[85%] mx-16 mt-4">
            <button className="flex">
              <BiMessageRounded className="text-gray-500 size-5 mt-0.5 hover:bg-blue-400 rounded-full " />
              <div className="text-gray-500 ml-1 hover:text-blue-500 font-bold">
                10
              </div>
            </button>
            <button className="flex">
              <FaRegHeart
                onClick={() => likeOrDislikeHandler(tweet?._id)}
                className="text-gray-500 mt-1 mr-1 hover:bg-pink-300 rounded-full "
              />
              <div className="text-gray-500 font-bold">
                {tweet?.like?.length}
              </div>
            </button>
            <button className="flex">
              <MdOutlineDelete className="text-gray-500 mr-2 size-5 mt-0.5 hover:bg-green-400 rounded-full" />
              <div className="text-gray-500 font-bold hover:text-green-500">
                Delete
              </div>
            </button>
            <button className="flex">
              <FaRegBookmark className="text-gray-500 mr-2 size-4 mt-1.5 hover:bg-yellow-300 rounded-full" />
              <div className="text-gray-500 font-bold  hover:text-yellow-400">
                Bookmark
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
