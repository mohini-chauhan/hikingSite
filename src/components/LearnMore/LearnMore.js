import React from "react";
import PropTypes from "prop-types";
import styles from "./LearnMore.module.scss";
import close from "./assets/close.png";

const LearnMore = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(true);
  return (
    <>
      {isModalVisible && (
        <article className={styles.LearnMore}>
          <section className={styles.LearnMore__learnMoreWrapper}>
            <section
              className={styles.LearnMore__learnMoreWrapper__centralizedText}
            >
              <p>Come join us Learn More</p>
            </section>
            <img
              width="20px"
              height="20px"
              src={close}
              alt="closeIcon"
              onClick={() => setIsModalVisible(!isModalVisible)}
            />
          </section>
        </article>
      )}
    </>
  );
};

LearnMore.propTypes = {};

LearnMore.defaultProps = {};

export default LearnMore;
