//Libraries
import React from "react";
import _ from "lodash";
//Styles
import style from "./ContactList.module.scss";
//ContactInfo
import * as contactInfo from "../../myContactInfo/myContactInfo";

const ContactList = props => {
  const myContactInfo = _.values(contactInfo);

  const CustomLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <div className={style["c-list"]}>
      {myContactInfo.map(contact => {
        const Img = (
          <div className={style["c-item__media"]}>
            <img src={contact.img} alt={contact.name} />
          </div>
        );

        const Content = (
          <div className={style["c-item__content"]}>{contact.content}</div>
        );

        return (
          <div key={contact.name} className={style["c-item"]}>
            {contact.url ? (
              <CustomLink url={contact.url}>{Img}</CustomLink>
            ) : (
              Img
            )}
            {contact.url ? (
              <CustomLink url={contact.url}>{Content}</CustomLink>
            ) : (
              Content
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
