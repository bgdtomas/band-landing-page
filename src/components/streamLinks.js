import React from 'react';

class StreamLinks extends React.Component {
    
    render() {
      const { name,img } = this.props;
      return (
        <a>
            <img src={img} className="linkImages cursorPointer"></img>
        </a>
      );
    }
  }
  
  export default StreamLinks;
  