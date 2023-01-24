import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Contact.css";
import { useAlert } from "react-alert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form
          className="contactContainerForm"
          // onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value="Vedant"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value="test@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value="hi"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" disabled={false}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
