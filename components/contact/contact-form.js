import { useEffect, useState } from "react";

import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const sendMessage = async (messageDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(messageDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestError("");
        setRequestStatus("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const messageHandler = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");
    try {
      await sendMessage({
        email,
        name,
        message,
      });
      setRequestStatus("success");
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;
  switch (requestStatus) {
    case "pending":
      notification = {
        status: "pending",
        title: "Sending message..",
        message: "Your message is on its way!",
      };
      break;

    case "success":
      notification = {
        status: "success",
        title: "Success!",
        message: "Message sent succesfully!",
      };
      break;

    case "error":
      notification = {
        status: "error",
        title: "Error!",
        message: requestError,
      };
      break;

    default:
      break;
  }

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
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
}
