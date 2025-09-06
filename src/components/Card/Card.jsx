//Styles
import style from "./Card.module.scss";

function Card({ name, img, content }) {
  const imgUrl = new URL(`../../assets/${img}`, import.meta.url).href;
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={style.card__title}>{name}</div>
      <div className={style.card__content}>{content}</div>
    </div>
  );
}

export default Card;
