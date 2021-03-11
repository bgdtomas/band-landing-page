import React from "react";

class TourDates extends React.Component {
  render() {
    const { day, year, city, stadium, status, button } = this.props;
    return (
      <div>
        <div className="datesTable">
          <div className="tourDates">
            <h2>{day}</h2>
            <h3>{year}</h3>
          </div>
          <div className="datesLocation">
            <h2>{city}</h2>
            <h3>{stadium}</h3>
          </div>
          <a className="datesButton" href="/shop">
            <div className="redBomb">
              <img src={button} />
            </div>
            <h2 className="datesBuyButton cursorPointer">TICKETS</h2>
            <h3 className="datesStatus cursorPointer">{status}</h3>
          </a>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default TourDates;
