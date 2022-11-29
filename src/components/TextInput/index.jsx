import React from "react";
import "./style.css";

export const TextInput = ({ searchValue, handleChange }) => (
  <input
    type={"search"}
    className="search-input"
    value={searchValue}
    onChange={handleChange}
    placeholder="Search a Topic"
  />
);
