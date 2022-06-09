import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import Menu from "../Menu/menu";
import SearchBar from "../SearchBar/searchBar";
import "./header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-top">
        <i className="fa-solid fa-truck-arrow-right"></i>
        ENVÍO GRATIS A PARTIR DE $100.000 / Compra con tu crédito Sistecredito o
        SU+ Pay
      </div>
      <div className="header-bottom">
        <Menu />
        <Link className="header-logo" to="/">
          <img src={Logo} alt="/" />
        </Link>
        <SearchBar />
        <button className="header-shop">
          <i className="fa-solid fa-bag-shopping"></i>
          <p>Tienda</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
