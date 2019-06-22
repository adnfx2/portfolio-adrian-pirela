//Libraries
import React from "react";
//Styles
import style from "./Hamburgers.module.scss";

const Hamburger = ({ toggleMobileMenu, onClick }) => {
  return (
    <div className={style.hamburger__wrapper}>
      <button
        className={`${style.hamburger}
          ${style["hamburger--slider"]}
          ${toggleMobileMenu ? style["is-active"] : ""}`}
        type="button"
        onClick={onClick}
      >
        <span className={style["hamburger-box"]}>
          <span className={style["hamburger-inner"]} />
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
