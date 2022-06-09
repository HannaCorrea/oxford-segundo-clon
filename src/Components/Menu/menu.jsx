import { useState } from "react";
import LogoMenu from "../../Assets/logotipo-blanco.png";
import "./menu.css";

function Menu() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <button
        className="header-menu-trigger"
        onClick={function () {
          setActiveMenu(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        onClick={function () {
          setActiveMenu(false);
        }}
        className={`overlay ${activeMenu === true ? "overlay--show" : ""}`}
      ></div>
      <nav
        className={`menu-container ${
          activeMenu === true ? "menu-container--show" : ""
        }`}
      >
        <div className="menu-header">
          <img className="menu-trigger-image" src={LogoMenu} alt="/" />
          <button
            onClick={function () {
              setActiveMenu(false);
            }}
            className="menu-close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="menu-option">
          <button>
            <p>Hombre</p>
          </button>
          <button>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="menu-option">
          <button>
            <p>Mujer</p>
          </button>
          <button>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="menu-option">
          <button>
            <p>Accesorios</p>
          </button>
          <button>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

        <button>
          <p>Nuevas colecciones</p>
        </button>

        <button className="menu-shop">
          <i className="fa-solid fa-location-dot"></i>
          Tiendas
        </button>
        <button className="menu-sales">
          <i className="fa-solid fa-tags"></i>
          Rebajas
        </button>
      </nav>
    </>
  );
}

export default Menu;
