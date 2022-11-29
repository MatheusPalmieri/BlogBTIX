import React from "react";
import ContentLoader from "react-content-loader";
import "./style.css";

export const LoadingPostDetails = (props) => (
  <div className="loading-post-details">
    <ContentLoader
      speed={2}
      width="100vw"
      height="700px"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="8" y="14" rx="0" ry="0" width="900px" height="800px" />
    </ContentLoader>
  </div>
);
