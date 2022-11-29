import React from "react";
import P from 'prop-types';
import "./style.css";

export const Button = ({ text, loadMorePosts, disabled = false }) => (
  <button className="button-load" onClick={loadMorePosts} disabled={disabled}>
    {text}
  </button>
);

Button.propTypes = {
  disabled: false,
}

Button.propTypes = {
  text: P.string.isRequired,
  loadMorePosts: P.func.isRequired,
  disabled: P.bool,
};
