//Libraries
import React from "react";
//Components
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
//Styles
import style from "./Contact.module.scss";

const Contact = props => (
  <div className={style.contact}>
    <h1 className={style.contact__title}>Contact</h1>

    <div className={style.contact__list}>
      <p className={style.contact__subtitle}>
        Find me on any of these mediums:
      </p>
      <hr />
      <ContactList />
    </div>
    <div className={style.contact__list}>
      <p className={style.contact__subtitle}>Or send me a message:</p>
      <hr />
      <ContactForm />
    </div>
  </div>
);

export default Contact;
