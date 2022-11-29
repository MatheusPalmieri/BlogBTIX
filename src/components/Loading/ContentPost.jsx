import React from "react";
import ContentLoader from "react-content-loader";

const ContentPost = (props) => (
    <div className="card-container">
      <ContentLoader
        speed={2}
        height="180px"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="20" cy="20" r="20" />
        <rect x="48" y="8" rx="3" ry="3" width="100" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="60" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <rect x="0" y="104" rx="3" ry="3" width="178" height="6" />
        <rect x="0" y="120" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="150" rx="3" ry="3" width="100" height="6" />
        <rect x="200" y="145" rx="0" ry="0" width="200" height="24" />
      </ContentLoader>
  </div>
);

export default ContentPost;
