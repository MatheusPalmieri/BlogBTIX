import React from 'react';
import P from 'prop-types';
import './style.css';

import { Card } from '../Card';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <Card
        key={post.id}
        id={post.id}
        user={post.user}
        title={post.title}
        body={post.body}
        lengthComments={post.comment}
        placeholderButton="Comentar"
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array.isRequired,
};
