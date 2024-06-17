import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";
import { useSelector } from "react-redux";

export const useGetMyTweets = (id) => {
  const dispatch = useDispatch();
  const { refresh } = useSelector((store) => store.tweet);
  //   const id = localStorage.getItem("userId");
  useEffect(() => {
    const fetchMyTweets = async () => {
      try {
        const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
          withCredentials: true,
        });
        dispatch(getAllTweets(res.data.tweets));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyTweets();
  }, [refresh]);
};
