import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

export const NavBar = ({ handleSearch, searchPageNum, tempUserInput }) => {
  return (
    <nav>
      <SearchBar
        handleSearch={handleSearch}
        searchPageNum={searchPageNum}
        tempUserInput={tempUserInput}
      />
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <h1>Read Now</h1>
      </NavLink>
      <NavLink to={"/page/1"} style={{ textDecoration: "none" }}>
        <button className="button-top-books">Top Free Books</button>
      </NavLink>
    </nav>
  );
};
// NavBar.propTypes = {
//   handleSearch: PropTypes.func.isRequired,
// };
