import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Logo } from "../Logo";
import { TextInput } from "../TextInput";
import "./style.css";

export const Header = ({ searchValue, handleChange, loading }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <Logo />
      </div>

      {/* Input */}
      <div className={`header-search-input show-search-${showSearch}`}>
        {!loading && (
          <TextInput searchValue={searchValue} handleChange={handleChange} />
        )}
      </div>

      {/* Icon Search */}
      <button
        className="header-search-icon"
        onClick={() => setShowSearch(!showSearch)}
      >
        <SearchIcon />
      </button>
    </header>
  );
};
