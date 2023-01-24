import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';
import ratingStars from './asset/rating.png'
import Button from '../Button/Button';

const Content = () => (
  <article className={styles.Content}>
    <h5>Hiking trails</h5>
    <h3>Lorem epsum dolor set emetproin vel epsum dolor vocal set empt</h3>
    <section className={styles.Content__ratingSection}>
      <figure>
        <img src={ratingStars} alt="star-rating"/>        
      </figure>
      <p className={styles.Content__ratingSection__firstPara}>$30.30</p>
      <p><s>$40.30</s></p>
      
    </section>
    <p className={styles.Content__aboutDetails}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin diam finibus mi congue, at dictum est consectetur. Aliquam vel scelerisque orci. In fringilla, nisi vel consectetur rutrum, neque nunc suscipit ligula, vitae gravida sapien dolor laoreet elit.
    </p>
    <Button Title='VIEW TRAILS' />
  </article>
);

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
