import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardAuthorContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;
const Img = styled.img`
  width: 40px;
`;

const AuthorName = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardWrapper>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthorContainer>
        <ImgContainer>
          <Img src={props.card.img} />
        </ImgContainer>
        <AuthorName>By {props.card.author}</AuthorName>
      </CardAuthorContainer>
    </CardWrapper>
  );
};

// Make sure to include PropTypes.
Card.proptypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
