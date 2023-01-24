import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTile = styled.article`
  height: ${(props) => props.Height};
  width: ${(props) => props.width};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.backGroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
const StyledTextWrapperMain = styled.section`
  position: absolute;
  bottom: 30px;
  left: 79px;

  @media screen and (max-width: 768px) {
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

const StyledTextWrapperOther = styled.section`
  position: absolute;
  bottom: 25px;
  left: 25px;
`;
const StyledText1 = styled.p`
  font-family: Chivo;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: white;
  text-transform: uppercase;
`;
const StyledText2 = styled.p`
  font-family: Roboto;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.15;
  letter-spacing: 0.5px;
  color: white;
  text-transform: uppercase;
`;
const StyledText2WithChildren = styled.p`
  font-family: Roboto;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1px;
  color: white;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Tile = ({
  backGroundImage,
  Height = "300px",
  Text1 = "",
  Text2 = "",
  width = "auto",
  children,
  ...props
}) => {
  return (
    <StyledTile
      backGroundImage={backGroundImage}
      Height={Height}
      width={width}
      {...props}
    >
      {children ? (
        <StyledTextWrapperMain>
          <StyledText1>{Text1}</StyledText1>
          <StyledText2WithChildren>{Text2}</StyledText2WithChildren>
          {children}
        </StyledTextWrapperMain>
      ) : (
        <StyledTextWrapperOther>
          <StyledText1>{Text1}</StyledText1>
          <StyledText2>{Text2}</StyledText2>
        </StyledTextWrapperOther>
      )}
    </StyledTile>
  );
};

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
