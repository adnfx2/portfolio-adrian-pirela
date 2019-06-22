//Libraries
import React from "react";
//Components
import Navbar from "../../components/Navbar/Navbar";
//Styles
import style from "./Header.module.scss";

const Header = props => (
  <div className={style.header}>
    <Navbar />
  </div>
);

export default Header;
