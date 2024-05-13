import express from "express";
import {
  createTweet,
  getAllTweets,
  getFollowingTweets,
  likeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";
import { deleteTweet } from "../controllers/tweetController.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets);

export default router;
