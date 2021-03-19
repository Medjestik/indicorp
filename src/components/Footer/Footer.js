import React from 'react';
import './Footer.css';
import facebookIcon from '../../images/facebook-icon.png';
import instagramIcon from '../../images/instagram-icon.png';
import twitterIcon from '../../images/twitter-icon.png';
import youtubeIcon from '../../images/youtube-icon.png';

function Footer() {
  return (
    <section className="footer container">
      <div className="footer__container">
        <p className="footer__copy">Made With Love By Figmaland All Right Reserved</p>
        <ul className="footer__links">
          <li className="footer__link"><img className="footer__link-icon" alt="facebook" src={facebookIcon}></img></li>
          <li className="footer__link"><img className="footer__link-icon" alt="instagram" src={instagramIcon}></img></li>
          <li className="footer__link"><img className="footer__link-icon" alt="twitter" src={twitterIcon}></img></li>
          <li className="footer__link"><img className="footer__link-icon" alt="youtube" src={youtubeIcon}></img></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
