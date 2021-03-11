import React from 'react';

class StreamLinks extends React.Component {
    
    render() {
      const { link,img } = this.props;
      return (
        <a href={link}>
            <img src={img} className="linkImages cursorPointer"></img>
        </a>
      );
    }
  }
  
  export default StreamLinks;
  