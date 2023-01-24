import React from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.scss";
import instaLogo from "./assets/instagram.png";
import Button from "../Button/Button";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import card6 from "./assets/card6.png";
const imgList = [card1, card2, card3, card4, card5, card6];

const Gallery = () => (
  <article className={styles.Gallery}>
    <section className={styles.Gallery__headingWrapper}>
      <section className={styles.Gallery__headingWrapper__iconWrapper}>
        <img src={instaLogo} alt="instaLogo" width="20px" height="20px" />
        <p>Mountains on Instagram</p>
      </section>
      <Button Title="Follow Us" Width="197px" />
    </section>
    <section className={styles.Gallery__imgGallery}>
      {imgList.map((item, index) => (
        <img src={item} alt={item} key={index} width="18%" height="234px" />
      ))}
    </section>
  </article>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
