import React from "react";
import Shirts from "../components/shirts";

class ShoppingShirts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          price: "25.99 $",
          status: "SOLD OUT",
          img: "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT1.png?alt=media&token=1daf5596-bac5-4a71-ba26-8bd56f8771fd",
        },
        {
          id: 2,
          price: "25.99 $",
          status: "SOLD OUT",
          img: "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT2.png?alt=media&token=c0deede0-a7f9-42f1-9d4c-684cadb2aa36",
        },
        {
          id: 3,
          price: "25.99 $",
          status: "SOLD OUT",
          img: "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT3.png?alt=media&token=f79dc0e8-5cb4-4f31-b6d1-98b547fe2700",
        },
        {
          id: 4,
          price: "25.99 $",
          status: "SOLD OUT",
          img: "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
        },
      ],
    };
  }
  render() {
    return (
      <div className="shirtsContainer">
        {this.state.data.map((shirts) => {
          return (
            <Shirts
              img={shirts.img}
              price={shirts.price}
              status={shirts.status}
            />
          );
        })}

      </div>
    );
  }
}

export default ShoppingShirts;
