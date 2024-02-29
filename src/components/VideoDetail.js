import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-screen">
      <div className="display-screen-box">
        <iframe
          title="video-player"
          src={videoSrc}
          className="display-screen"
        />
      </div>
      <div className="video-title-box">
        <h4 className="video-title">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
