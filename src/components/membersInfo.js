import React from "react";
import MembersCard from "../components/membersCard";

class MembersInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "KIM PINE",
          description: "DRUMMER",
          age: "23 YEARS OLD",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/kimPine.jpg?alt=media&token=570c9a60-b571-41e7-8134-9477f60da025",
        },
        {
          id: 2,
          name: "SCOTT PILGRIM",
          description: "RATING : AWESOME",
          age: "22 YEARS OLD",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/scottPilgrim.jpg?alt=media&token=2907374d-9cc3-4821-ba52-26b761d5cffb",
        },
        {
          id: 3,
          name: "STEPHEN STILLS",
          description: '"THE TALENT"',
          age: "22 YEARS OLD",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/stephenStills.jpg?alt=media&token=348dd827-0ef4-4338-a0a9-0ae126aeb511",
        },
      ],
    };
  }
  render() {
    return (
      <div className="membersContainer">
        <div className="membersCard">
          {this.state.data.map((card) => {
            return <MembersCard 
              img={card.img}
              name={card.name}
              description={card.description}
              age={card.age}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default MembersInfo;
