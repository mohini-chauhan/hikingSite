import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thankyou for reaching out to us.We will get back to you soon!`);
  };
  return (
    <article className={styles.Form}>
      <p>
        Join our mailing list for <br /> travel plans
      </p>
      <form className={styles.Form__emailForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </article>
  );
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
