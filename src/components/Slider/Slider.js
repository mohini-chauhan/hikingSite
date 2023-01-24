import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slider.module.scss";
import Tile from "../Tile/Tile";
import Right from "./assets/right_arrow.png";
import Left from "./assets/left_arrow.png";
const Slider = ({ imageList }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const onLeft = () => {
    setCurrentImage(
      currentImage == 0 ? imageList.length - 1 : currentImage - 1
    );
  };
  const onRight = () => {
    setCurrentImage(
      currentImage == imageList.length - 1 ? 0 : currentImage + 1
    );
  };
  return (
    <article className={styles.Slider}>
      <span className={styles.Slider__Left} onClick={onLeft}>
        <img src={Left} />
      </span>
      <Tile Height="221px" width="100%" {...imageList[currentImage]} />
      <span className={styles.Slider__Right} onClick={onRight}>
        <img src={Right} />
      </span>
    </article>
  );
};

export default Slider;
