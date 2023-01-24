import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactUs.module.scss";
import styled from "styled-components";
import bg from "./assets/card1bg.png";
import Benefits from "../Benefits/Benefits";
import compass from "./assets/compass.png";
import headset from "./assets/headset.png";
import weather from "./assets/weather.png";
import Form from "../Form/Form";
import Extras from "../Extras/Extras";
import Footer from "../Footer/Footer";
import { useMediaQuery } from "react-responsive";

const StyledWrapper = styled.article`
  width: 100%;
  height: 547px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const benefitsDetails = [
  {
    Icon: compass,
    text: "Explore the world with us",
  },
  {
    Icon: headset,
    text: "Awsome plans",
  },
  {
    Icon: weather,
    text: "minimum 4 nights",
  },
];
const extrasDetails = [
  {
    Title: "Locations",
    list: [
      {
        title: "Lake Tahoe",
        link: "https://visitinglaketahoe.com/",
      },
      {
        title: "Yosimite",
        link: "https://www.yosemite.com/",
      },
      {
        title: "Shasta",
        link: "https://en.wikipedia.org/wiki/Mount_Shasta",
      },
      {
        title: "Portland",
        link: "https://www.travelportland.com/",
      },
      {
        title: "Dead End",
        link: "https://www.hikingproject.com/trail/7042194/dead-end-trail",
      },
    ],
  },
  {
    Title: "support",
    list: [
      {
        title: "Learn",
        link: "",
      },
      {
        title: "Trips",
        link: "",
      },
      {
        title: "Packs",
        link: "",
      },
    ],
  },
  {
    Title: "extra",
    list: [
      {
        title: "Get to know out team",
        link: "",
      },
      {
        title: "Find and expert",
        link: "",
      },
      {
        title: "Contact us",
        link: "https://www.pixelolabs.com/#contact",
      },
    ],
  },
];

const ContactUs = () => {
  const [selected, setSelected] = useState("");
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <StyledWrapper Background={bg}>
      <section className={styles.ContactUs}>
        <section className={styles.ContactUs__topSection}>
          {benefitsDetails.map((detail, index) => (
            <Benefits {...detail} key={index} />
          ))}
        </section>
        <section className={styles.ContactUs__bottomSection}>
          <Form />
          {extrasDetails.map((item, index) => (
            <Extras
              {...item}
              selected={selected}
              setSelected={setSelected}
              isMobile={isMobile}
              key={index}
            />
          ))}
        </section>
      </section>
      <Footer />
    </StyledWrapper>
  );
};

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
