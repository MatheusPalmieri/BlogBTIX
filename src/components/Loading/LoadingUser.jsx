import React from "react";
import ContentLoader from "react-content-loader";
import "./style.css";

export const LoadingUser = (props) => (
  <div className="loading-user">
    <ContentLoader
      speed={2}
      width="100%"
      height={460}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="60" rx="0" ry="0" width="100%" height="160" />
      <rect x="20" y="240" rx="0" ry="0" width="100%" height="120" />
    </ContentLoader>
  </div>
);
