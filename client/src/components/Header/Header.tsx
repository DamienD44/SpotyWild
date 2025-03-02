import { NavLink } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";
import MenuMob from "../menu-mobil/Menumob";
import "../menu-mobil/menu.css";

function Header() {
  return (
    <>
      <header>
        <nav className="header-container">
          <section className="nav-section">
            <MenuMob />
            <img
              src="/images/logo-spotywild.png"
              alt="Logo du site de SpotyWild"
            />
          </section>
          <Search />
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="searchpage">Genres</NavLink>
            </li>
            <li>
              <NavLink to="artists">Artistes</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
