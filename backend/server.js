import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

// app conig

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// middleware
app.use(cors());
app.use(express.json());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
