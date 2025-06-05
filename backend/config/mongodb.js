import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established");
  });
  await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`);
};

export default connectDB;
