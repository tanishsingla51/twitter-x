import CreatePost from "./CreatePost";
import { Tweet } from "./Tweet";

const Feed = () => {
  return (
    <div className="w-[50%] border border-gray-100 overflow-y: auto">
      <CreatePost />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Feed;
