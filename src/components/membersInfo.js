import React from "react";
import MembersCard from "../components/membersCard";

class MembersInfo extends React.Component {
  render() {
    const { name, description, img } = this.props;
    return (
      <div className="membersContainer">
        <div className="membersCard">
          <MembersCard />
          <MembersCard />
          <MembersCard />
        </div>
      </div>
    );
  }
}

export default MembersInfo;
