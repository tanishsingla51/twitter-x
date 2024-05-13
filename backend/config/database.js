import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../config/.env",
});

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((error) => {
      console.log("Database connection failed. Exiting now...");
      console.error(error);
    });
};

export default databaseConnection;
