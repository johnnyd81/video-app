import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img
        className="item-img"
        src={video.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className="item-title-box">
        <div className="item-title">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
