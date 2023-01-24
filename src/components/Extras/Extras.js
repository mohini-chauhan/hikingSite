import React from "react";
import PropTypes from "prop-types";
import styles from "./Extras.module.scss";

const Extras = ({ isMobile, selected, setSelected, ...props }) => {
  const onToggle = () => {
    setSelected(selected === props.Title ? "" : props.Title);
  };
  return (
    <article className={styles.Extras} id="extra">
      <p className={styles.Extras__title}>
        {props.Title}
        {isMobile && (
          <span onClick={onToggle}>{selected == props.Title ? "-" : "+"}</span>
        )}
      </p>
      {(!isMobile || selected === props.Title) && (
        <ul>
          {props.list.map((item, index) => (
            <li key={index}>
              <a href={item.link ? item.link : "#"}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

Extras.propTypes = {};

Extras.defaultProps = {};

export default Extras;
