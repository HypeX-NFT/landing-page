import React from 'react';
import {
  FaTwitter, FaDiscord, FaTelegram, FaInstagram, FaMedium, FaTiktok, FaLinkedin,
} from 'react-icons/fa';

const redirect = (url) => {
  window.location = url;
};

const iconMrgin = 'mb-7';

export default function SocialMediaBar({ isMobile }) {
  return (
    <div className={`grid grid-cols-1 text-white ${isMobile ? 'text-xl' : 'text-3xl'}`}>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://twitter.com/HypeX_io');
        }}
      >
        <FaTwitter />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://t.me/HypeX_Official');
        }}
      >
        <FaTelegram />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://discord.com/invite/hypeX');
        }}
      >
        <FaDiscord />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://medium.com/hypex-nft');
        }}
      >
        <FaMedium />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://www.instagram.com/HypeX_io/');
        }}
      >
        <FaInstagram />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://vm.tiktok.com/ZM8mAHfPc/');
        }}
      >
        <FaTiktok />
      </span>
      <span
        role="link"
        className={iconMrgin}
        onClick={() => {
          redirect('https://www.linkedin.com/company/hypex-nft/');
        }}
      >
        <FaLinkedin />
      </span>
    </div>
  );
}
