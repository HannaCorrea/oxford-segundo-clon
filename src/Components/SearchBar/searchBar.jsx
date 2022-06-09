import { useState } from "react";
import "./searchBar.css";

function SearchBar() {
  const [activeBar, setActiveBar] = useState(false);

  return (
    <>
      <button
        onClick={function () {
          setActiveBar(true);
        }}
        className={`search-button ${
          activeBar === true ? "search-button--noShow" : ""
        }`}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Buscar</p>
      </button>
      {/* gorda, pille pues, las validaciones no tienen que ser si o si tan
      compuestas, es decir, ese "activeBar === true?" es lo mismo que hacer
      la validacion solo poniendo el nombre de la variable, como en la siguiente linea*/}
      <div
        onClick={function () {
          setActiveBar(false);
        }}
        className={`overlay ${activeBar ? "overlay--show" : ""}`}
      ></div>
      <form
        className={`searchBar-container ${
          activeBar === true ? "searchBar-container--show" : ""
        }`}
        action="/"
      >
        <input type="text" placeholder="¿Que estás buscando?" />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}

export default SearchBar;
