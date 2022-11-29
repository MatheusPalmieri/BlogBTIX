import React from "react";
import "./style.css";

export const Button = ({ text, loadMorePosts, disabled }) => (
  <button className="button-load" onClick={loadMorePosts} disabled={disabled}>
    {text}
  </button>
);
