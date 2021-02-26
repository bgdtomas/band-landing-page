import React from "react";
import Banner from "../components/banner";
import BandInfo from "../components/bandInfo";
import MembersInfo from "../components/membersInfo";
import BandPlaylist from "../components/bandPlaylist";

class LandingPage extends React.Component{

    render(){
        return(
            <div>
            <Banner/>
            <BandInfo/>
            <MembersInfo/>
            <div className="bandRocking"></div>
            <BandPlaylist/>
            <div>hello world</div>
            </div>
        );
    }

}

export default LandingPage;