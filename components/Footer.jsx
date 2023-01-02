import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import FooterBanner from "./FooterBanner";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Mahmodul Hasan All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
