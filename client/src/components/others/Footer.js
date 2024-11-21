import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-center">
      <div>
        <Link className="text-light" to="/">
          Home
        </Link>{" "}
        ||{" "}
        <Link className="text-light" to="/profile">
          Profile
        </Link>{" "}
        ||{" "}
        <a
          className="text-light"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/"
        >
          Github
        </a>
      </div>
      <p className="text-light">© Midecoder - 2024 </p>
    </div>
  );
};

export default Footer;
