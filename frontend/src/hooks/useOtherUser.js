import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

export const useOtherUsers = (id) => {
  const dispatch = useDispatch();
  //   const id = localStorage.getItem("userId");
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`, {
          withCredentials: true,
        });
        dispatch(getOtherUsers(res.data.otherUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, []);
};
