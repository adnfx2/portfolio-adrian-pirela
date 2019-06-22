//Libraries
import React, { useState } from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
//Styles
import style from "./ContactForm.module.scss";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => !val || val.length >= len;

const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const ContactForm = props => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(values) {
    if (isSubmitted) {
      alert(
        "Message already send. If you need to resend please reload this page"
      );
      return;
    } else if (isLoading) {
      alert("Sending message, please wait...");
      return;
    }
    sendFeedback(values);
  }

  function sendFeedback(values) {
    const templateId = "portfolio";
    const serviceId = "default_service";
    setLoading(() => true);

    window.emailjs
      .send(serviceId, templateId, { ...values })
      .then(res => {
        setLoading(() => false);
        setSubmitted(() => true);
        console.log(res);
        alert("Message sent, see you soon!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        setLoading(() => false);
        console.error("Failed to send feedback. Error: ", err);
        alert(`There was an error: ${err}`);
      });
  }

  return (
    <div className={`container ${style.contactForm}`}>
      <LocalForm onSubmit={values => handleSubmit(values)}>
        <Row className="form-group">
          <Label htmlFor="firstName" md={2}>
            First Name
          </Label>
          <Col md={10}>
            <Control.text
              model=".firstName"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15)
              }}
            />
            <Errors
              className="text-danger"
              model=".firstName"
              show="touched"
              messages={{
                required: "*Required ",
                minLength: "*Must be greater than 2 characters ",
                maxLength: "*Must be 15 characters or less "
              }}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="lastName" md={2}>
            Last Name
          </Label>
          <Col md={10}>
            <Control.text
              model=".lastName"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15)
              }}
            />
            <Errors
              className="text-danger"
              model=".lastName"
              show="touched"
              messages={{
                required: "*Required ",
                minLength: "*Must be greater than 2 characters ",
                maxLength: "*Must be 15 characters or less "
              }}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="organization" md={2}>
            Organization
          </Label>
          <Col md={10}>
            <Control.text
              model=".organization"
              id="organization"
              name="organization"
              placeholder="Tesla inc."
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15)
              }}
            />
            <Errors
              className="text-danger"
              model=".organization"
              show="touched"
              messages={{
                required: "*Required ",
                minLength: "*Must be greater than 2 characters ",
                maxLength: "*Must be 15 characters or less "
              }}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="email" md={2}>
            Email
          </Label>
          <Col md={10}>
            <Control.text
              model=".email"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
              validators={{
                required,
                validEmail
              }}
            />
            <Errors
              className="text-danger"
              model=".email"
              show="touched"
              messages={{
                required: "*Required ",
                validEmail: "*Invalid Email Address "
              }}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="message" md={2}>
            Message
          </Label>
          <Col md={10}>
            <Control.textarea
              model=".message"
              id="message"
              name="message"
              rows="12"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={{ size: 10, offset: 2 }}>
            <Button
              disabled={isLoading ? true : false}
              type="submit"
              color="primary"
            >
              Send Message
            </Button>
          </Col>
        </Row>
      </LocalForm>
    </div>
  );
};

export default ContactForm;
