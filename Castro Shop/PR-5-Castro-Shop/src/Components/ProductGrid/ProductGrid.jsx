import React from "react";
import Container from 'react-bootstrap/Container';
import ProductCard from "../ProductCard/ProductCard";
import shop_1 from "../../assets/images/shop_1.jpg";
import shop_2 from "../../assets/images/shop_2.jpg";
import shop_3 from "../../assets/images/shop_3.jpg";
import shop_4 from "../../assets/images/shop_4.jpg";
import shop_5 from "../../assets/images/shop_5.jpg";
import shop_6 from "../../assets/images/shop_6.jpg";
import shop_7 from "../../assets/images/shop_7.jpg";
import shop_8 from "../../assets/images/shop_8.jpg";
import shop_9 from "../../assets/images/shop_9.jpg";
import shop_10 from "../../assets/images/shop_10.jpg";
import shop_11 from "../../assets/images/shop_11.jpg";
import shop_12 from "../../assets/images/shop_12.jpg";

const ProductGrid = () => {
  const products = [
    {
      image: shop_1,
      title: "Cold Crewneck Sweater",
      price: "70.30"
    },
    {
      image: shop_2,
      title: "Multi-Way Ultra Crop Top",
      price: "50.00"
    },
    {
      image: shop_3,
      title: "Side-Tie Tank",
      price: "40.00"
    },
    {
      image: shop_4,
      title: "Graceful Stylish Shoulder Bag",
      price: "60.30"
    },
    {
      image: shop_5,
      title: "Formal Shoes",
      price: "50.00"
    },
    {
      image: shop_6,
      title: "Must-Have Easy Tank",
      price: "25.30"
    },
    {
      image: shop_7,
      title: "Sun Goggles",
      price: "90.30"
    },
    {
      image: shop_8,
      title: "Side-Tie Tank",
      price: "40.00"
    },
    {
      image: shop_9,
      title: "Roadster Women's  Pullover",
      price: "40.00"
    },
    {
      image: shop_10,
      title: "Night Lamp",
      price: "40.00"
    },
    {
      image: shop_11,
      title: "Shirt",
      price: "40.00"
    },
    {
      image: shop_12,
      title: "Laptop",
      price: "90.30"
    }
  ];

  return (
    <Container>
      <div className="row">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </Container>    
  );
};

export default ProductGrid;