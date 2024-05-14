//import Feed from './Feed'
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between w-[70%] mx-auto">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
  );
};
// in outlet we are rendering the child components of Home component

export default Home;
