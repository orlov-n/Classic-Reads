import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

export const NavBar = ({ handleSearch, goHome }) => {
  return (
    <nav>
      <SearchBar handleSearch={handleSearch} />
      <NavLink to={"/"} style={{ textDecoration: "none" }}
      // render={() => {goHome()}}
      
      >
        
      
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
