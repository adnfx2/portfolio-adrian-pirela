//Libraries
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//Components
import Hamburger from "../Hamburgers/Hamburgers";
//Styles
import style from "./Navbar.module.scss";

const Navbar = props => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const mobileMenuHandler = e => setToggleMobileMenu(prevState => !prevState);
  const menuSelectionHandler = e => setToggleMobileMenu(() => false);

  return (
    <nav className={style.nav}>
      <Hamburger
        toggleMobileMenu={toggleMobileMenu}
        onClick={mobileMenuHandler}
      />
      <ul
        className={`${style.nav__list} ${
            toggleMobileMenu ? style.isOpen : ""
          }`}
      >
        <li className={style.nav__listItem}>
          <NavLink
            onClick={menuSelectionHandler}
            to="/about"
            activeClassName={style.isActive}
          >
            About
          </NavLink>
        </li>
        <li className={style.nav__listItem}>
          <NavLink
            onClick={menuSelectionHandler}
            to="/skills"
            activeClassName={style.isActive}
          >
            Skills
          </NavLink>
        </li>
        <li className={style.nav__listItem}>
          <NavLink
            onClick={menuSelectionHandler}
            to="/contact"
            activeClassName={style.isActive}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
