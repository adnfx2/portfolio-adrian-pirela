import { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.scss";

const serviceId = "service_2bp0zz8";
const templateId = "template_yznc46b";
const publicKey = "8EfGi8N3M7ZxGPwsU";

function ContactForm() {
  const formRef = useRef();
  async function onSubmit(e) {
    e.preventDefault();
    await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
    alert("sent");
    formRef.current.reset();
  }
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <fieldset>
        <legend>Contact info</legend>
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="email" name="email" id="email" placeholder="email" />
        <textarea
          name="message"
          id="message"
          placeholder="Hi, I would like to connect..."
        />
        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
}

export default ContactForm;
