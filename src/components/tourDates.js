import React from "react";

class TourDates extends React.Component {
  render() {
    const { day, year, city, stadium, status } = this.props;
    return (
      <div className="">
        <div>
          <h2>{day}</h2>
          <h3>{year}</h3>
        </div>
        <div>
          <h2>{city}</h2>
          <h3>{stadium}</h3>
        </div>
        <div>
          <h2>button</h2>
          <h3>{status}</h3>
        </div>
      </div>
    );
  }
}

export default TourDates;
