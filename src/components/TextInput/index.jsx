import React from "react";
import P from 'prop-types';
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

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
