import React from "react";
import { useNavigate } from "react-router-dom";
import { CardUser } from "../CardUser";
import "./style.css";

export const Card = ({
  id,
  user,
  title,
  body,
  lengthComments,
  placeholderButton,
}) => {
  const navigate = useNavigate();

  const goPost = () => navigate(`/Post/${id}/`);

  return (
    <div className="card-container">
      <CardUser user={user} />

      <div className="card-body" onClick={goPost}>
        <div className="card-content">
          <h2 className="card-content-title">{title}</h2>
          <p className="card-content-body">{body}</p>
        </div>

        <div className="card-footer">
          <p
            className="card-footer-text"
            title="Clique para visualizar os comentários"
          >
            {lengthComments.length} Comentários ...
          </p>
          <button className="card-footer-button" title="Clique para comentar">{placeholderButton}</button>
        </div>
      </div>
    </div>
  );
};
