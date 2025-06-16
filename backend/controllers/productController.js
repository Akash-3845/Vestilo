import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subcategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log("Product Data:", productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// list all products
const listProdcuts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      products: products,
    });
  } catch (error) {
    console.error("Error listing products:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log("Error removing product:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// single product info
const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }   
        res.json({ success: true, product: product });
    } catch (error) {
        console.error("Error fetching single product:", error);
        res.json({
            success: false,
            message: error.message,
        });
  }
};

export { addProduct, listProdcuts, removeProduct, singleProduct };
