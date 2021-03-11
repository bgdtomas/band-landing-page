import React from "react";
import TourDates from "../components/tourDates";

class TourList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          day: "4 MAY",
          year: "2021",
          city: "WINNIPEG, CND",
          stadium: "THE GARRICK CENTRE",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT1.png?alt=media&token=1daf5596-bac5-4a71-ba26-8bd56f8771fd",
        },
        {
          id: 2,
          day: "10 MAY",
          year: "2021",
          city: "TORONTO, CND",
          stadium: "ROY THOMSON HALL",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT2.png?alt=media&token=c0deede0-a7f9-42f1-9d4c-684cadb2aa36",
        },
        {
          id: 3,
          day: "14 MAY",
          year: "2021",
          city: "TORONTO, CND",
          stadium: "THE OPERA HOUSE",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT3.png?alt=media&token=f79dc0e8-5cb4-4f31-b6d1-98b547fe2700",
        },
        {
          id: 4,
          day: "20 MAY",
          year: "2021",
          city: "OTTAWA, CND",
          stadium: "THE BRONSON CENTRE",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
        },
        {
          id: 5,
          day: "27 MAY",
          year: "2021",
          city: "MONTREAL, CND",
          stadium: "CLUB SODA MONTREAL",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
        },
        {
          id: 6,
          day: "30 MAY",
          year: "2021",
          city: "TORONTO, CND",
          stadium: "QUEEN ELIZABETH THEATRE",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
        },
        {
          id: 7,
          day: "5 APRIL",
          year: "2021",
          city: "VANCOUVER, CND",
          stadium: "COMODORE BALLROOM",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
        },
        {
          id: 8,
          day: "7 APRIL",
          year: "2021",
          city: "VANCOUVER, CND",
          stadium: "PNE FORUM",
          status: "SOLD OUT",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/SHIRT4.png?alt=media&token=9dfd9c45-e18d-4e6e-b3e0-1c93dfcb812e",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>TORONTO TOUR</h1>
        <div class="tourDateContainer">{this.state.data.map((dates) => {
          return (
            <TourDates
              day={dates.day}
              year={dates.year}
              city={dates.city}
              stadium={dates.stadium}
              city={dates.status}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

export default TourList;
