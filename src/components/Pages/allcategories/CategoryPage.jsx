import React from "react";
import { useParams } from "react-router-dom";
import JewelryPage from "../../Allproducts/Jewelry/JewelryPage";
import Bracelets from "../../Allproducts/Bracelets/Bracelets";
import Beauty from "../../Allproducts/Beautyproducts/Beauty";
import Heels from "../../Allproducts/Heels/Heels";
import Women from "../../Allproducts/Women/Women";
import Bags from "../../Allproducts/Bags/Bags";
import Shoes from "../../Allproducts/Shoes/Shoes";
import Accessories from "../../Allproducts/Acessories/Accessories";

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Define different category-specific content based on the category name
  const getCategoryContent = () => {
    switch (categoryName) {
      case "Jewelry":
        return (
          <div>
            {" "}
            <JewelryPage />{" "}
          </div>
        );
      case "Heels":
        return (
          <div>
            {" "}
            <Heels />{" "}
          </div>
        );
      case "Bracelets":
        return (
          <div>
            {" "}
            <Bracelets />{" "}
          </div>
        );
      case " Beauty, Health & Hair":
        return (
          <div>
            {" "}
            <Beauty />{" "}
          </div>
        );
      case "Women Fashion":
        return (
          <div>
            {" "}
            <Women />{" "}
          </div>
        );
      case "Bags":
        return (
          <div>
            {" "}
            <Bags />{" "}
          </div>
        );
      case "Shoes":
        return (
          <div>
            {" "}
            <Shoes />{" "}
          </div>
        );
      case "Acessories":
        return <div> <Accessories/> </div>;
      // Add more cases for other categories
      default:
        return <div>No content available for this category.</div>;
    }
  };

  return (
    <div>
      <h2>{categoryName} Products</h2>
      {getCategoryContent()}
    </div>
  );
};

export default CategoryPage;
