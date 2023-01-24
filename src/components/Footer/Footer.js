import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import youtube from "./assets/youtube.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

const Footer = () => (
  <article className={styles.Footer}>
    <section className={styles.Footer__footerContentWrapper}>
      <section className={styles.Footer__footerContentWrapper__copyright}>
        &#169; 2021 Mountain Hikers. All Rights Reserved
      </section>
      <section className={styles.Footer__footerContentWrapper__socialMedia}>
        <a href="https://www.instagram.com/pixelolabs/?hl=en">
          <img src={instagram} alt="instaLogo" width="17px" height="17px" />
        </a>
        <a href="https://www.youtube.com">
          <img src={youtube} alt="youtubeLogo" width="21px" height="15px" />
        </a>
        <a href="https://publish.twitter.com/">
          <img src={twitter} alt="twitterLogo" width="20px" height="16px" />
        </a>
      </section>
    </section>
  </article>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
