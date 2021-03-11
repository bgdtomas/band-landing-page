import React from "react";
import shopImage from "../images/SHOPimage.png";

class ShopSection extends React.Component {
  render() {
    return (
      <div className="shopSection">
        <a href="/shop">
          <div className="shopImage">
            <img src={shopImage} />
          </div>
          <h1>BUY OUR MERCH!</h1>
        </a>
      </div>
    );
  }
}

export default ShopSection;
