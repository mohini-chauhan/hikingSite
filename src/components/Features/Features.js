import React from "react";
import styles from "./Features.module.scss";
import Tile from "../Tile/Tile";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";

const Features = () => (
  <article className={styles.Features} id="hike">
    <section className={styles.Features__topSection}>
      <Tile
        className={styles.Features__Tile}
        backGroundImage={card1}
        Height="245px"
        width="100%"
        Text1="HIKE"
        Text2="COLORADO"
      />
      <Tile
        className={styles.Features__Tile}
        backGroundImage={card2}
        Height="245px"
        width="100%"
        Text1="HIKE"
        Text2="JUNGLE"
      />
    </section>
    <section className={styles.Features__bottomSection}>
      <Tile
        className={styles.Features__Tile}
        backGroundImage={card3}
        Height="245px"
        width="100%"
        Text1="HIKE"
        Text2="MOUNTAIN"
      />
      <Tile
        className={styles.Features__Tile}
        backGroundImage={card4}
        Height="245px"
        width="100%"
        Text1="HIKE"
        Text2="WATER"
      />
      <Tile
        className={styles.Features__Tile}
        backGroundImage={card5}
        Height="245px"
        width="100%"
        Text1="HIKE"
        Text2="PACKS"
      />
    </section>
  </article>
);

export default Features;
