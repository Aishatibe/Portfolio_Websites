import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="#" target="_blank">
        <BsLinkedin />
      </a>
      <a href="#" target="_blank">
        <FaGithub />
      </a>
      <a href="#" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
