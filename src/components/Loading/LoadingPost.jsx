import React from "react";
import "./style.css";
import ContentPost from "./ContentPost";

const LoadingPost = (props) => (
  <div className="loading-posts">
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
    <ContentPost />
  </div>
);

export default LoadingPost;
