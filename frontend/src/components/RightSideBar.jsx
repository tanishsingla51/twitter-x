import { IoSearch } from "react-icons/io5";

const RightSideBar = () => {
  return (
    <div className="w-[25%] position:fixed">
      <div className=" border-2 hover:border-blue-500 rounded-full bg-gray-200 outline-1 outline-blue-400 font-bold  mx-8 mt-2 flex items-center p-2 w-full">
        <IoSearch className="text-xl text-gray-400 cursor-pointer mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none "
        />
      </div>

      <div className="flex-row items-center justify-between p-2 bg-gray-100 rounded-md ml-8 mt-4 w-full">
        <h1 className="font-bold text-xl p-2 pb-4">Who to follow</h1>

        <div className="flex items-center rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/PlayStation_App_Icon.jpg"
            className="cursor-pointer w-10 h-10 rounded m-2 "
            alt="playstation"
          />
          <div>
            <h1 className="mt-1.5 font-bold flex-row hover:underline">
              PlayStation
            </h1>
            <p className=" mb-1 text-gray-500">@PlayStation</p>
          </div>
          <img
            src="https://i.pinimg.com/564x/e6/94/0c/e6940c93a398f209d2ea68b64a6f7ff4.jpg"
            className="w-5 h-5 rounded-full mb-5"
            alt="follow"
          />
          <button className="bg-black text-white px-5 py-2 ml-6 rounded-full outline-none">
            Follow
          </button>
        </div>

        <div className="flex items-center hover:bg-gray-200 transition-colors duration-300 ease-in-out mb-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ubisoft_logo.svg/1920px-Ubisoft_logo.svg.png"
            className="cursor-pointer w-10 h-10 rounded m-2 "
            alt="playstation"
          />
          <div>
            <h1 className="mt-1.5 font-bold flex-row hover:underline">
              Ubisoft
            </h1>
            <p className=" mb-1 text-gray-500">@Ubisoft</p>
          </div>
          <img
            src="https://i.pinimg.com/564x/e6/94/0c/e6940c93a398f209d2ea68b64a6f7ff4.jpg"
            className="w-5 h-5 rounded-full mb-5"
            alt="follow"
          />
          <button className="bg-black text-white px-5 py-2 ml-[52px] rounded-full outline-none">
            Follow
          </button>
        </div>

        <div className="flex items-center hover:bg-gray-200 transition-colors duration-300 ease-in-out mb-1">
          <img
            src="https://banner2.cleanpng.com/20180628/jgz/kisspng-watchespn-espn-com-app-store-5b35128689cb69.6540431215302048065644.jpg"
            className="cursor-pointer w-10 h-10 rounded m-2 "
            alt="playstation"
          />
          <div>
            <h1 className="mt-1.5 font-bold flex-row hover:underline">
              SportsCenter
            </h1>
            <p className=" mb-1 text-gray-500">@SportsCenter</p>
          </div>
          <img
            src="https://i.pinimg.com/564x/e6/94/0c/e6940c93a398f209d2ea68b64a6f7ff4.jpg"
            className="w-5 h-5 rounded-full mb-5"
            alt="follow"
          />
          <button className="bg-black text-white px-5 py-2 ml-2 rounded-full outline-none">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
