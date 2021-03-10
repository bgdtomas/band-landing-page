import React from "react";

class MembersCard extends React.Component {
  render() {
    const { name, description, age, img } = this.props;
    return (
      <div>
        <div className="membersImage">
          <img src={img} />
        </div>
        <div className="membersInfo">
          <h1>{name}</h1>
          <h2>{description}</h2>
          <h2>{age}</h2>
        </div>
      </div>
    );
  }
}

export default MembersCard;
