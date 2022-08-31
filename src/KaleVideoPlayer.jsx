import React from "react";
// import video from "./videos/movie.mp4";
export const KaleVideoPlayer = ({ videoUrl }) => {
  return (
    <>
      <h>The video element</h>
      {/* <iframe
        title="Youtube video"
        autosize
        src={videoUrl}
      ></iframe> */}
      <video autosize controls>
        <source src={video} />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
