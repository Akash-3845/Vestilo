import express from "express";
import {
  addProduct,
  listProdcuts,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
const productRouter = express.Router();

// Route to add a product
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
// Route to list all products
productRouter.get("/list", listProdcuts);
// Route to remove a product
productRouter.post("/remove", adminAuth, removeProduct);
// Route to get a single product by ID
productRouter.post("/single", singleProduct);

export default productRouter;
