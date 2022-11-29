import React from "react";
import "./style.css";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export const UserContent = ({ user }) => (
  <div className="user-content">
    {/* Email */}
    <div className="user-content-line">
      <div className="user-content-icon">
        <EmailOutlinedIcon />
      </div>
      <p>{user.email}</p>
    </div>

    {/* Phone */}
    <div className="user-content-line">
      <div className="user-content-icon">
        <LocalPhoneOutlinedIcon />
      </div>
      <p>{user.phone}</p>
    </div>

    {/* Website */}
    <div className="user-content-line">
      <div className="user-content-icon">
        <LanguageOutlinedIcon />
      </div>
      <a
        href={user.website}
        target="_blank"
        className="user-content-link"
        rel="noreferrer"
      >
        {user.website}
      </a>
    </div>
  </div>
);
