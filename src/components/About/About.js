import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.scss";
import card1 from "./asset/card1.png";
import card2 from "./asset/card2.png";
import hikingLogo from "./asset/hikingLogo.webp";
import Content from "../Content/Content";

const About = () => (
  <article className={styles.About}>
    <section className={styles.About__main}>
      <p className={styles.About__main__verticalText}>Hiking Trails to go |</p>
      <section className={styles.About__main__imgWrapper}>
        <img
          src={card1}
          alt="hikingGroup"
          className={styles.About__card1Style}
        />
        <img
          src={hikingLogo}
          alt="hikingLogo"
          className={styles.About__main__imgWrapper__hikingLogo}
          width="78px"
          height="77px"
        />
      </section>
      <Content />
    </section>
    <aside>
      <figure>
        <img
          src={card2}
          alt="valleyView"
          className={styles.About__card2Style}
        />
      </figure>
    </aside>
  </article>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
