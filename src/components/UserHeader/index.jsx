import React from 'react';
import P from 'prop-types';
import { Avatar } from '../Avatar';
import './style.css';

export const UserHeader = ({ id, user }) => (
  <div className="user-container">
    <div className="user-profile-avatar">
      <Avatar id={id} />
    </div>

    <h2 className="user-name">{user.name}</h2>
    <h3 className="user-username">{user.username}</h3>
  </div>
);

UserHeader.propTypes = {
  id: P.number.isRequired,
  user: P.object.isRequired,
};
