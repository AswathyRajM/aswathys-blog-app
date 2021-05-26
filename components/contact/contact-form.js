import { useState } from "react";

import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const messageHandler = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>How can help you?</h1>
      <form className={classes.form} onSubmit={messageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            id="name"
            required
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
