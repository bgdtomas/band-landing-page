import React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import ShoppingShirts from "../components/shoppingShirts";

class ShopPage extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <ShoppingShirts />
        <a href="/tour" className="cursorPointer tourButton tourShop">
          SEE UPCOMING TOUR DATES !
        </a>
        <Footer />
      </div>
    );
  }
}

export default ShopPage;
