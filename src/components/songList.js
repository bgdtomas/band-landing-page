import React from "react";

class SongList extends React.Component {
  render() {
    const { name, link } = this.props;
    return (
      <div
        onClick={() => this.props.changeSong({ link })}
        className="cursorPointer underline"
      >
        {name}
      </div>
    );
  }
}

export default SongList;
