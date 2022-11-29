import React from 'react';
import P from 'prop-types';
import './style.css';

export const PostComment = ({ comment }) => (
  <div className="post-comment-container">
    <h4 className="post-comment-email">{comment.email}</h4>
    <h3 className="post-comment-title">{comment.name}</h3>
    <p className="post-comment-body">{comment.body}</p>
  </div>
);

PostComment.propTypes = {
  comment: P.object.isRequired,
};
