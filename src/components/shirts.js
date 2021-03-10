import React from "react";

class Shirts extends React.Component {
  render() {
    const { price, img, status } = this.props;
    return (
      <div className="singleShirtContainer">
        <div className="shirtImage">
          <img src={img} />
        </div>
        <h1>{price}</h1>
        <div className="buyButtonContainer">
          <h1 className="status cursorPointer">{status}</h1>
          <h1 className="buyButton cursorPointer"> BUY </h1>
        </div>
      </div>
    );
  }
}

export default Shirts;
