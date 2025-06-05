import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center py-2 text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      {/* Rendering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6">
        {related.map((item, index) => (
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

export default RelatedProducts;
