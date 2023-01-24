import React from "react";
import PropTypes from "prop-types";
import styles from "./Benefits.module.scss";

const Benefits = ({ Icon, text, ...props }) => (
  <article className={styles.Benefits} {...props}>
    <img src={Icon} alt="compass" width="62px" height="62px" />
    <p className={styles.Benefits__benefitDetail}>{text}</p>
  </article>
);

Benefits.propTypes = {};

Benefits.defaultProps = {};

export default Benefits;
