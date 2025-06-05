import { React, useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const sortedProducts = [...products].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setLatestProducts(sortedProducts.slice(0, 10)); // Get the latest 4 products
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover Vestilo's latest collection – bold styles, modern fits,
          premium fabrics. Redefine your wardrobe with effortless fashion and
          confident vibes.
        </p>
      </div>
      {/* Rendering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            id={item._id}
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
