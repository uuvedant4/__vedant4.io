import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Yo, it's <b>Vedant Yetekar</b>, a software developer who's coding cool
          and crafting digital masterpieces.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/uuvedant4" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/vedant4__/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/vedant-yetekar-497949218"
          target="black"
        >
          <BsLinkedin />
        </a>
        <a href="https://leetcode.com/__vedant4/" target="black">
          <SiLeetcode />
        </a>
      </div>
    </div>
  );
};

export default Footer;
