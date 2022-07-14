import React from "react";
import "./BannerCategories.css";
import categorieOne from "../../assets/img/categoria1.png";
import categorieTwo from "../../assets/img/categoria2.png";
import categorieThree from "../../assets/img/categoria3.png";

const index = () => {
  return (
    <div>
      <div className="container-banner-categories">
        <a href="/">
          <img src={categorieOne} />
        </a>
        <a href="/">
          <img src={categorieTwo} />
        </a>
        <a href="/">
          <img src={categorieThree} />
        </a>
      </div>
    </div>
  );
};

export default index;
