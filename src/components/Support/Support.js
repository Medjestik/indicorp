import React from 'react';
import './Support.css';
import phoneIcon from '../../images/phone-main-color-icon.png';
import placeIcon from '../../images/place-white-color-icon.png';
import emailIcon from '../../images/nav-main-color-icon.png';

function Support() {
  return (
    <section className="support">
      <div className="container support__container">      
        <h2 className="support__title">Get In Touch</h2>
        <p className="support__subtitle">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <ul className="support__cards">
          <li className="support__card">
            <img className="support__card-icon" src={phoneIcon} alt="phone"></img>
            <p className="support__card-email">georgia.young@example.com</p>
            <p className="support__card-email">georgia.young@ple.com</p>
            <h4 className="support__card-title">Get Support</h4>
            <button className="support__card-btn">Submit Request</button>
          </li>
          <li className="support__card support__card_type_active">
            <img className="support__card-icon support__card-icon_type_active" src={placeIcon} alt="place"></img>
            <p className="support__card-email support__card-email_type_active">georgia.young@example.com</p>
            <p className="support__card-email support__card-email_type_active">georgia.young@ple.com</p>
            <h4 className="support__card-title support__card-title_type_active">Get Support</h4>
            <button className="support__card-btn support__card-btn_type_active">Submit Request</button>
          </li>
          <li className="support__card">
            <img className="support__card-icon" src={emailIcon} alt="email"></img>
            <p className="support__card-email">georgia.young@example.com</p>
            <p className="support__card-email">georgia.young@ple.com</p>
            <h4 className="support__card-title">Get Support</h4>
            <button className="support__card-btn" type="button">Submit Request</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Support;