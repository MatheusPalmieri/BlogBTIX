import React from 'react';
import P from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Avatar } from "../Avatar";
import "./style.css";

export const CardUser = ({ user }) => {
  const navigate = useNavigate();

  const goUser = () => navigate(`/User/${user.id}/${user.username}`);

  return (
    <div className="card-user" onClick={goUser}>
      <div className="avatar">
        <Avatar id={user.id} />
      </div>

      <div className="avatar-text">
        <p className="avatar-text-name">{user.name}</p>
        <p className="avatar-text-username">@{user.username}</p>
      </div>
    </div>
  );
};

CardUser.propTypes = {
  user: P.object.isRequired,
};
