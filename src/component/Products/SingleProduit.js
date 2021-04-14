import React from "react";
import styled from "styled-components";

const Product = styled.div`
  flex: 100%;
  box-shadow: 1px 1px 4px #8e9495;
  border-radius: 8px;
  padding: 1em;
  margin: 1em;
  background-color: #c4e2f2;
  h2 {
    color: #00a6ff;
    font-family: sans-serif;
  }
  p {
    color: #505050;
    font-family: sans-serif;
    line-height: 1.4em;
  }
  @media only screen and (min-width: 768px) {
      flex: 20%;
    }
`;

const SingleProduit = ({ props: { name, description } }) => {
  return (
    <Product>
      <h2>{name}</h2>
      <p>{description}</p>
    </Product>
  );
};

export default SingleProduit;
