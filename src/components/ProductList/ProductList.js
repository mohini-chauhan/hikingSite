import React from "react";
import styles from "./ProductList.module.scss";
import Product from "../Product/Product";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
const productDetails = [
  {
    Image: card1,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem epsum",
    SellingPrice: "169.90",
    DeceivedPrice: "227.58",
  },
  {
    Image: card2,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem epsum",
    SellingPrice: "24.20",
    DeceivedPrice: "",
  },
  {
    Image: card3,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem epsum",
    SellingPrice: "88.00",
    DeceivedPrice: "",
  },
  {
    Image: card4,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem epsum",
    SellingPrice: "19.40",
    DeceivedPrice: "22.00",
  },
  {
    Image: card5,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem epsum",
    SellingPrice: "99.30",
    DeceivedPrice: "",
  },
];
const ProductList = () => (
  <article className={styles.ProductList} id="products">
    <p className={styles.ProductList__verticalText}>Explore our trips |</p>
    <section className={styles.ProductList__ProductWrapper}>
      {productDetails.map((item, index) => (
        <Product
          className={styles.ProductList__ProductWrapper__Product}
          Width="20%"
          {...item}
          key={index}
        />
      ))}
    </section>
  </article>
);

export default ProductList;
