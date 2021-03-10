import React from "react";
import Banner from "../components/banner";
import BandInfo from "../components/bandInfo";
import MembersInfo from "../components/membersInfo";
import BandPlaylist from "../components/bandPlaylist";
import ShopSection from "../components/shopSection";
import Footer from "../components/footer";
import BandBackground from "../images/BANDBACKGROUND.png";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <BandInfo />
        <MembersInfo />
        <div className="bandRocking">
          <img src={BandBackground} />
        </div>
        <BandPlaylist />
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
