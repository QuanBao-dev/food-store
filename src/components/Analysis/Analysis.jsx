import "./Analysis.css";
import { useState } from "react";
const Analysis = () => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  return (
    <div className="analysis-container">
      <div
        className="video-container"
        onClick={() => setIsShowVideo(false)}
        style={{
          transform: !isShowVideo ? "translateY(-200%)" : "translateY(0)",
          transition: "1s",
        }}
      >
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/ny5ssI8VVHQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="iframe-youtube-video"
        ></iframe>
      </div>
      <div className="analysis-wrapper" onClick={() => setIsShowVideo(true)}>
        <div className="container-content">
          <div className="name">Sandwich</div>
          <h1 className="price">$45</h1>
          <div className="play-button-container">
            <div className="play-button-wrapper">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>

        <div className="bubble-item"></div>
        <div className="bubble-item"></div>
        <div className="bubble-item"></div>
      </div>
    </div>
  );
};

export default Analysis;
