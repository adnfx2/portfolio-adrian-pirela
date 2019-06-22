//Libraries
import React from "react";
//Styles
import style from "./Card.module.scss";

const Card = ({ name, img, content }) => (
  <div className={style.card}>
    <div className={style.card__img}>
      <img src={img} alt={name} />
    </div>
    <div className={style.card__title}>{name}</div>
    <div className={style.card__content}>{content}</div>
  </div>
);

export default Card;
