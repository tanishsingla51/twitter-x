import { configureStore } from "@reduxjs/toolkit";
import tweetSlice from "./tweetSlice";

import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userSlice,
    tweet: tweetSlice,
  },
});

export default store;
