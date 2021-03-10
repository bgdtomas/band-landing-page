import React from "react";
import shopImage from "../images/SHOPimage.png";

class ShopSection extends React.Component {
  render() {
    return (
      <div className="shopSection">
        <a href="/shop">
          <img src={shopImage} className="shopImage" />
          <h1>BUY OUR MERCH!</h1>
        </a>
      </div>
    );
  }
}

export default ShopSection;
