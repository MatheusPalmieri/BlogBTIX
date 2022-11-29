import P from 'prop-types';
import React from 'react';
import { UserContent } from '../UserContent';
import { UserHeader } from '../UserHeader';
import './style.css';

export const UserProfile = ({ id, user }) => (
  <div className="user-section-profile">
    <section className="user-section">
      <UserHeader id={id} user={user} />
    </section>

    <section className="user-section">
      <UserContent user={user} />
    </section>
  </div>
);

UserProfile.propTypes = {
  id: P.number.isRequired,
  user: P.object.isRequired,
};
