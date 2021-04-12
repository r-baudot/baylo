import React from "react";

const SingleProduit = ({ props: { name, description } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SingleProduit;
