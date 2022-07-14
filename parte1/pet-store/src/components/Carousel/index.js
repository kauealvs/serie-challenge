import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
// import Arrow from "../../assets/img/seta.png";

import bannerImg from "../../assets/img/banner.png";
import "./Carousel.css";

function index() {
  const settings = {
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    showStatus: false,
  };

  return (
    <section className="carousel-section">
      <Carousel {...settings}>
        <img src={bannerImg} />
        <img src={bannerImg} />
        <img src={bannerImg} />
      </Carousel>
    </section>
  );
}

export default index;
