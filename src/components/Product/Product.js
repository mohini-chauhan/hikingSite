import React from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.article`
  height: ${(props) => props.Height};
  width: ${(props) => props.Width};
`;
const StyledPara = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25;
  color: #8a8a8a;
  padding: 20px 0;
`;
const StyledPricingWrapper = styled.section`
  display: flex;
  gap: 10px;
`;
const StyledPrice = styled.p`
  font-family: Chivo;
  font-size: 13px;
  letter-spacing: 2.5px;
  font-weight: bold;
  color: ${(props) => props.color};
  padding-top: 15px;
`;
const Product = ({
  Height = "auto",
  Width = "auto",
  Description = "",
  Image,
  SellingPrice = "0.0",
  DeceivedPrice = null,
  ...props
}) => (
  <StyledCardWrapper Width={Width} Height={Height} {...props}>
    <img src={Image} alt="card1" width="100%" height="210px" />
    <StyledPara>{Description}</StyledPara>
    <StyledPricingWrapper>
      <StyledPrice color="#2736dd">${SellingPrice}</StyledPrice>
      {DeceivedPrice && (
        <StyledPrice color="#8a8a8a">
          <s>${DeceivedPrice}</s>
        </StyledPrice>
      )}
    </StyledPricingWrapper>
  </StyledCardWrapper>
);

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
