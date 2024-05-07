import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Follow = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/bipin-gowda-807401203/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/b_pin_007/">
          <FaInstagram size={20} />
        </a>
        <a href="https://github.com/bpin007">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default Follow;
