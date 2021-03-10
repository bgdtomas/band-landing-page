import React from "react";
import BannerImage from "../images/BANNER.png";

const Banner = () => (
  <div className="banner">
    <a href="/home">
      <div className="bannerImage">
        <img src={BannerImage} />
      </div>
    </a>
  </div>
);

export default Banner;
