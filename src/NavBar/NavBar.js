import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

export const NavBar = ({ handleSearch, goHome }) => {
  return (
    <nav>
      <SearchBar handleSearch={handleSearch} />
      <NavLink to={"/"} 
      // render={() => {goHome()}}
      
      >
        
      
        <h1>Read Now</h1>
      </NavLink>
      <NavLink to={"/page/1"}>
        <button className="button-top-books">Top Free Books</button>
      </NavLink>
    </nav>
  );
};
NavBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
