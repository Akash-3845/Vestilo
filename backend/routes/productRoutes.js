import express from "express";
import {
  addProduct,
  listProdcuts,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
const productRouter = express.Router();

// Route to add a product
productRouter.post("/add", addProduct);
// Route to list all products
productRouter.get("/list", listProdcuts);
// Route to remove a product
productRouter.post("/remove", removeProduct);
// Route to get a single product by ID
productRouter.post("/single", singleProduct);

export default productRouter;
