//Libraries
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//Components
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
//Styles
import style from "./Main.module.scss";

const Main = props => (
  <div className={style.main}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/about" />
    </Switch>
  </div>
);

export default Main;
