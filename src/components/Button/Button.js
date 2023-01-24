import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  border: 2px solid ${(props) => props.Color};
  background: transparent;
  cursor: pointer;
`;
const Span = styled.span`
  transform: skewX(19deg);
  display: inline-block;
  font-weight: bold;
  color: ${(props) => props.Color};
  letter-spacing: 1px;
`;

const Button = ({
  Height = "43px",
  Width = "228px",
  Color = "#2736dd",
  Title = "Title",
  onClick,
}) => {
  return (
    <ButtonStyle Width={Width} Height={Height} Color={Color} onClick={onClick}>
      <Span Color={Color}>{Title}</Span>
    </ButtonStyle>
  );
};

Button.propTypes = {};

export default Button;
