import React from 'react';
import P from 'prop-types';
import { CardUser } from '../CardUser';
import { PostContent } from '../PostContent';
import './style.css';

export const PostDetails = ({ post }) => (
  <section className="post-details-content">
    <CardUser user={post.userJson} />

    <PostContent post={post} />
  </section>
);

PostDetails.propTypes = {
  post: P.object.isRequired,
};
