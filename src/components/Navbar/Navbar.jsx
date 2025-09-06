//Libraries
import { useState } from "react";
import { NavLink } from "react-router";
//Components
import Hamburger from "../Hamburgers/Hamburgers";
//Styles
import style from "./Navbar.module.scss";

function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  function mobileMenuHandler() {
    setToggleMobileMenu((prevState) => !prevState);
  }
  function menuSelectionHandler() {
    setToggleMobileMenu(() => false);
  }

  return (
    <nav className={style.nav}>
      <Hamburger
        toggleMobileMenu={toggleMobileMenu}
        onClick={mobileMenuHandler}
      />
      <ul
        className={`${style.nav__list} ${toggleMobileMenu ? style.isOpen : ""}`}
      >
        <li className={style.nav__listItem}>
          <NavLink
            onClick={menuSelectionHandler}
            to="/about"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            About
          </NavLink>
        </li>
        <li className={style.nav__listItem}>
          <NavLink
            onClick={menuSelectionHandler}
            to="/skills"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Skills
          </NavLink>
        </li>
        <li className={style.nav__listItem}>
          <NavLink
            onClick={menuSelectionHandler}
            to="/contact"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
