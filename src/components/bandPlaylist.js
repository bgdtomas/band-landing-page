import React from "react";
import albumCover from "../images/SBOvsTheWORLD.jpg";

class BandPlaylist extends React.Component {
  render() {
    return (
      <div>
        <h2>
          AVAILABLE FOR STREAM NOW
        </h2>
        <h1 className="biggerText">
          "SCOTT PILGRIM VS THE WORLD"
        </h1>
        <div className="playlistContainer">
          <div>
            <img src={albumCover} className="albumImage"/>
          </div>
          <div className="songs">
            <div>WE ARE SEX BOB OMB</div>
            <div>GARBAGE TRUCK</div>
            <div>THRESHOLD</div>
            <div>SUMMERTIME</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BandPlaylist;
