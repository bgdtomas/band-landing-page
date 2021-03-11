import React from "react";
import Banner from "../components/banner";
import TourList from "../components/tourList";
import Footer from "../components/footer";

class TourPage extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <TourList />
        <Footer />
      </div>
    );
  }
}

export default TourPage;
