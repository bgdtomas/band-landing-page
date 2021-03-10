import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import ShoppingShirts from "../components/shoppingShirts";

class Shop extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <ShoppingShirts />
        <a href="/shop" className="cursorPointer tourButton tourShop">
          SEE UPCOMING TOUR DATES !
        </a>
        <Footer />
      </div>
    );
  }
}

export default Shop;
