//Libraries
import React from "react";
import { Routes, Route, Navigate } from "react-router";
//Components
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
//Styles
import style from "./Main.module.scss";

function Main() {
  return (
    <div className={style.main}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </div>
  );
}

export default Main;
