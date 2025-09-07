//Libraries
import { Fragment } from "react";
//Styles
import style from "./Footer.module.scss";
//ContactInfo
import {
  twitter,
  email,
  linkedin,
  github,
} from "../../myContactInfo/myContactInfo";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.footer__list}>
        {renderMediaList([email, linkedin, twitter, github])}
      </ul>
    </footer>
  );
}

function renderMediaList(medias) {
  return medias.map((media) => {
    return (
      <Fragment key={media.name}>
        <li className={style.footer__listItem}>
          <a
            className={style.footer__link}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={media.img} alt={media.name} />
          </a>
        </li>
      </Fragment>
    );
  });
}

export default Footer;
