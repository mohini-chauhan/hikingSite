import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.scss";
import logo from "./assets/logo.png";
import cart from "./assets/cart.png";
import search from "./assets/search.png";
import user from "./assets/user.png";
import hamburger from "./assets/hamburger.png";
import closeIcon from "./assets/close.png";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const navList = [
    {
      title: "HIKE",
      link: "#hike",
    },
    {
      title: "TRIPS",
      link: "#products",
    },
    {
      title: "EXTRA",
      link: "#extra",
    },
  ];

  const handleHamburger = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <section className={styles.Navbar}>
      {isMobile && (
        <nav className={styles.Navbar__navItems} onClick={handleHamburger}>
          <figure className={styles.Navbar__navItems__navLinks}>
            <img
              className={styles.Navbar__navItems__hamburger}
              src={showNav ? closeIcon : hamburger}
              alt="hamburger"
            />
          </figure>
        </nav>
      )}
      <nav className={styles.Navbar__navItems}>
        <figure className={styles.Navbar__navItems__navLinks}>
          <img
            src={logo}
            alt="logo"
            className={styles.Navbar__navItems__navLinks__logo}
          />
        </figure>
        {!isMobile && (
          <ul className={styles.Navbar__navItems__linksContainer}>
            {navList.map((item, index) => (
              <li
                key={index}
                className={styles.Navbar__navItems__linksContainer__navLinks}
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <nav className={styles.Navbar__navItems}>
        {!isMobile && (
          <>
            <figure className={styles.Navbar__navLinks}>
              <img
                src={search}
                alt="logo"
                className={styles.Navbar__navLinks__navIcon}
              />
            </figure>
            <figure className={styles.Navbar__navLinks}>
              <img
                src={user}
                alt="logo"
                className={styles.Navbar__navLinks__navIcon}
              />
            </figure>
          </>
        )}
        <figure className={styles.Navbar__navLinks}>
          <img
            src={cart}
            alt="logo"
            className={styles.Navbar__navLinks__navIcon}
          />
        </figure>
      </nav>
      {showNav && (
        <nav className={styles.Navbar__mobileMenu}>
          <ul>
            {navList.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => {
                    setShowNav(false);
                    window.location.assign(item.link);
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
