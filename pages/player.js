import React, { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import YouTube from "react-youtube";
const getVideoId = require("get-video-id");

function Home() {
  // console.log(getVideoId("https://vimeo.com/796734005").id);
  function playvideo() {
    console.log("video press play")
  }
  return (
    <>
      <div>
        <Vimeo
          video="796734005"
          style={{ width: "70%" }}
          responsive
          color="e0148b"
          keyboard="false"
          textTrack="true"
          showByline="false"
        />
      </div>
    </>
  );
}

export default Home;
