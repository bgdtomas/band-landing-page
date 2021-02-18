import React from "react";
import Banner from "../components/banner";
import BandInfo from "../components/bandInfo";
import MembersInfo from "../components/membersInfo";

class LandingPage extends React.Component{

    render(){
        return(
            <div>
            <Banner/>
            <BandInfo/>
            <MembersInfo/>
            <h1>Hello world</h1>
            </div>
        );
    }

}

export default LandingPage;