import React from "react";
import Shirts from "../components/shirts";

class ShoppingShirts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name:"Scott Pilgrim vs. The World: Original Score Vinyl",
          price: "59.99 $",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/VINYL2.png?alt=media&token=93068c66-6858-4d43-a595-9795a0ca8d60",
        },
        {
          id: 2,
          name:"Scott Pilgrim vs. the World Original Vinyl",
          price: "59.99 $",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/VINYL.png?alt=media&token=566e8507-7edc-4e31-9029-7ef41f0e62db",
        },
        {
          id: 3,
          name:"SEX BOB-OMBER SHIRT",
          price: "25.99 $",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT1.png?alt=media&token=1daf5596-bac5-4a71-ba26-8bd56f8771fd",
        },
        {
          id: 4,
          name:"SEX BOB-OMB LOGO SHIRT",
          price: "25.99 $",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT2.png?alt=media&token=c0deede0-a7f9-42f1-9d4c-684cadb2aa36",
        },
        {
          id: 5,
          name:"SEX BOB-OMB CHAOS THEATRE SHIRT",
          price: "25.99 $",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT3.png?alt=media&token=f79dc0e8-5cb4-4f31-b6d1-98b547fe2700",
        },
        {
          id: 6,
          name:"READY SLAYER ONE SHIRT",
          price: "25.99 $",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
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
              name={shirts.name}
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
