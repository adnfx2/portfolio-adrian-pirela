//Libraries
import React from "react";
import { Link } from "react-router";
//Styles
import style from "./About.module.scss";
//Media
import hero_img from "../../assets/portfolio.jpg";

function About() {
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <img className={style.hero__image} src={hero_img} alt="test" />
        <div className={style.hero__content}>
          <h1 className={style.hero__title}>
            Front-End
            <br /> Web Developer
          </h1>
          <p className={style.hero__text}>
            Hi! I'm Adrian Pirela a front-end web developer willing to get
            involve in challenging projects that can contribute in my career to
            gain more experience. As part of my routine I like to challenge
            myself and learn new things every day, that keeps me motivated about
            everything related to web development technologies.
          </p>
          <Link className={style.hero__btn} to="/contact">
            Hire me
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
