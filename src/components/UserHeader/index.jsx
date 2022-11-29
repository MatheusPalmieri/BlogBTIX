import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";

export const UserHeader = ({ id, user }) => {
  return (
    <div className="user-container">
      <div className="user-profile-avatar">
        <Avatar id={id} />
      </div>

      <h2 className="user-name">{user.name}</h2>
      <h3 className="user-username">{user.username}</h3>
    </div>
  );
};
