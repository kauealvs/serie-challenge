import React from "react";
import "./Banners.css";
import dogImg from "../../assets/img/img5.png";
import catImg from "../../assets/img/img6.png";

const index = () => {
  return (
    <div className="container-banners">
      <a href="/">
        <img src={catImg} />
      </a>
      <a href="/">
        <img src={dogImg} />
      </a>
    </div>
  );
};

export default index;
