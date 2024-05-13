import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // basic validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "All input is required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { Register };

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Please enter all fields",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "User does not exist",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        expiresIn: "1d",
      })
      .json({
        message: `Logged in successfully by ${user.name}`,
        user,
        success: true,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { Login };

const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "User Logged out successfully",
    success: true,
  });
};

export { Logout };

export const bookmarks = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);

    if (user.bookmarks.includes(tweetId)) {
      //remove
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        msg: "Tweet removed from Bookmarks",
      });
    } else {
      // bookmark
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        msg: "Tweet added to Bookmarks",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOtherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );
    if (!otherUsers) {
      return res.status(401).json({
        msg: "No otherUsers found",
      });
    }
    return res.status(200).json({
      otherUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId); //patel
    const user = await User.findById(userId); //keshav
    if (!user.followers.includes(loggedInUserId)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} just follow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInUser = await User.findById(loggedInUserId); //patel
    const user = await User.findById(userId); //keshav
    if (loggedInUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User has not followed yet`,
      });
    }
    return res.status(200).json({
      message: `${loggedInUser.name} unfollow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
