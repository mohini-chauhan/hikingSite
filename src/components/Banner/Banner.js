import React from "react";
import PropTypes from "prop-types";
import styles from "./Banner.module.scss";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.jpg";
import Button from "../Button/Button";
import Tile from "../Tile/Tile";
import { useMediaQuery } from "react-responsive";
import Slider from "../Slider/Slider";
const Banner = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const imageList = [
    {
      backGroundImage: card2,
      Text1: "Ready for the Desert",
      Text2: "For Your ATV",
    },
    {
      backGroundImage: card3,
      Text1: "How To’s",
      Text2: "Installation Tutorials",
    },
    {
      backGroundImage: card4,
      Text1: "Build your own",
      Text2: "Chain & Sprocket Kits",
    },
  ];
  return (
    <article className={styles.Banner}>
      <section className={styles.Banner__leftSection}>
        <Tile
          className={styles.Banner__leftSection__Tile}
          backGroundImage={card1}
          Height="500px"
          Text1="save up to 50%!"
          Text2="Summer Sale"
          children={
            <Button
              Color="white"
              Title="VIEW PRODUCT"
              Width="264px"
              onClick={() => window.location.assign("/#products")}
            />
          }
        />
      </section>
      {!isMobile ? (
        <section className={styles.Banner__rightSection}>
          <section className={styles.Banner__rightSection__topSection}>
            <Tile
              backGroundImage={card2}
              Height="250px"
              width="50%"
              Text1="Ready for the Desert"
              Text2="For Your ATV"
            />
            <Tile
              backGroundImage={card3}
              Height="250px"
              width="50%"
              Text1="How To’s"
              Text2="Installation Tutorials"
            />
          </section>
          <section className={styles.Banner__rightSection__bottomSection}>
            <Tile
              backGroundImage={card4}
              Height="245px"
              width="100%"
              Text1="Build your own"
              Text2="Chain & Sprocket Kits"
            />
          </section>
        </section>
      ) : (
        <Slider imageList={imageList} />
      )}
    </article>
  );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
