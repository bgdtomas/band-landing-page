import React from "react";
import SongList from "../components/songList";
import ShopSection from "../components/shopSection";

class BandPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: "https://open.spotify.com/embed/track/6tHpxFDLucR3Xs9nivuyiO",
      data: [
        {
          id: 1,
          name: "WE ARE SEX BOB OMB",
          link: "https://open.spotify.com/embed/track/6tHpxFDLucR3Xs9nivuyiO",
        },
        {
          id: 2,
          name: "GARBAGE TRUCK",
          link: "https://open.spotify.com/embed/track/4YbslGpDoOgJgH8wqSdfaP",
        },
        {
          id: 3,
          name: "THRESHOLD",
          link: "https://open.spotify.com/embed/track/0Zq9KrBsJSWfnIgEyXi05b",
        },
        {
          id: 4,
          name: "SUMMERTIME",
          link: "https://open.spotify.com/embed/track/2kHOFLXpz4PIh4bFg3a96r",
        },
      ],
    };

    this.changeSong = this.changeSong.bind(this);
  }

  changeSong(id) {
    const songName = id.link;
    this.setState({ song: songName });
  }

  render() {
    return (
      <div>
        <h2>AVAILABLE FOR STREAMING NOW</h2>
        <h1 className="biggerText">"SCOTT PILGRIM VS THE WORLD"</h1>
        <div className="testSection">
          <ShopSection />
          <div className="playlistContainer">
            <div className="songs">
              {this.state.data.map((songs) => {
                return (
                  <SongList
                    name={songs.name}
                    link={songs.link}
                    changeSong={this.changeSong}
                  />
                );
              })}
            </div>
            <div>
              <iframe
                src={this.state.song}
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BandPlaylist;
