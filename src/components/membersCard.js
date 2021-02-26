import React from "react";
import kim from "../images/kimPine.jpg";
import stephen from "../images/stephenStills.jpg";
import scott from "../images/scottPilgrim.jpg";

class MembersCard extends React.Component {
  render() {
    return (
      <div >
        <div className="membersImage">
            <img src={scott}/>
        </div>
        <div className="membersInfo">
          NAME
          <ul />
          DESCRIPTION
        </div>
      </div>
    );
  }
}

export default MembersCard;
