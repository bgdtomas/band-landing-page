import React from "react";
import StreamLinks from "../components/streamLinks";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linksData: [
        {
          id: 1,
          link: "https://open.spotify.com/album/3q1e0dxZARuaHxZkLzgErK",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/pngaaa.com-4041960.png?alt=media&token=0abd7476-cc9f-4029-a7ea-7f53f93611b7",
        },
        {
          id: 2,
          link:
            "https://music.youtube.com/playlist?list=OLAK5uy_mD7DFNU49CdgiMA-70k4l74nTmyM7qvQw",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/Daco_4456208.png?alt=media&token=2a44bad5-6f77-4384-bc4d-c32f6fa889ab",
        },
        {
          id: 3,
          link: "https://www.deezer.com/album/627776",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/deezer-png-deezer-logo-circle-485-redbytes-custom-mobile-deezer-png-485_485.png?alt=media&token=737e99a8-e3e7-445c-b0cd-2fb6dcd821f4",
        },
        {
          id: 4,
          link:
            "https://music.apple.com/us/album/scott-pilgrim-vs-world-original-motion-picture-soundtrack/1440501585?l=es",
          img:
            "https://firebasestorage.googleapis.com/v0/b/spvstw-4fc31.appspot.com/o/pngwing.com.png?alt=media&token=848a0f3b-b24a-424c-9f56-433e9b674968",
        },
      ],
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="songLinks">
          {this.state.linksData.map((links) => {
            return <StreamLinks link={links.link} img={links.img} />;
          })}
        </div>
        <section>
          Original Motion Picture Soundtrack Copyright © 2021 Universal
          Entertainment All Rights Reserved
        </section>
      </div>
    );
  }
}

export default Footer;
