//import Feed from './Feed'
import { useOtherUsers } from "../hooks/useOtherUser";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";
// import { useGetProfile } from "../hooks/useGetProfile";
import { useSelector } from "react-redux";

const Home = () => {
  const { user, otherUsers } = useSelector((store) => store.user);

  useOtherUsers(user?._id);

  return (
    <div className="flex justify-between w-[70%] mx-auto">
      <LeftSideBar />
      <Outlet />
      <RightSideBar allOtherUsers={otherUsers} />
    </div>
  );
};
// in outlet we are rendering the child components of Home component

export default Home;
