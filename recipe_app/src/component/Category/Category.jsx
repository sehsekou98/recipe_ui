import "./category.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ name, imageUrl, type }) => {
  const navigate = useNavigate();
  const goToCategoryListing = () => {
    navigate(`/listing/${type}`);
  };
  return (
    <div className="category" onClick={goToCategoryListing}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Category;
