import React from 'react';
import './Contacts.css';
import phoneIcon from '../../images/phone-icon.png';
import placeIcon from '../../images/place-icon.png';
import emailIcon from '../../images/email-icon.png';

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <ul className="container contacts__container">
        <li className="contacts__column">
          <h3 className="contacts__column-title">Company Info</h3>
          <ul className="contacts__column-container">
            <li className="contacts__column-item contacts__link">About Us</li>
            <li className="contacts__column-item contacts__link">Carrier</li>
            <li className="contacts__column-item contacts__link">We are hiring</li>
            <li className="contacts__column-item contacts__link">Blog</li>
          </ul>
        </li>
        <li className="contacts__column">
          <h3 className="contacts__column-title">Legal</h3>
          <ul className="contacts__column-container">
            <li className="contacts__column-item contacts__link">About Us</li>
            <li className="contacts__column-item contacts__link">Carrier</li>
            <li className="contacts__column-item contacts__link">We are hiring</li>
            <li className="contacts__column-item contacts__link">Blog</li>
          </ul>
        </li>
        <li className="contacts__column">
          <h3 className="contacts__column-title">Features</h3>
          <ul className="contacts__column-container">
            <li className="contacts__column-item contacts__link">Business Marketing</li>
            <li className="contacts__column-item contacts__link">User Analytic</li>
            <li className="contacts__column-item contacts__link">Live Chat</li>
            <li className="contacts__column-item contacts__link">Unlimited Support</li>
          </ul>
        </li>
        <li className="contacts__column">
          <h3 className="contacts__column-title">Resources</h3>
          <ul className="contacts__column-container">
            <li className="contacts__column-item contacts__link">IOS & Android</li>
            <li className="contacts__column-item contacts__link">Watch a Demo</li>
            <li className="contacts__column-item contacts__link">Customers</li>
            <li className="contacts__column-item contacts__link">API</li>
          </ul>
        </li>
        <li className="contacts__column contacts__column_type_large">
          <h3 className="contacts__column-title">Get In Touch</h3>
          <ul className="contacts__column-container">
            <li className="contacts__column-item"><img className="contacts__icon" src={phoneIcon} alt="phone"></img>(480) 555-0103</li>
            <li className="contacts__column-item"><img className="contacts__icon" src={placeIcon} alt="place"></img>4517 Washington Ave.</li>
            <li className="contacts__column-item"><img className="contacts__icon" src={emailIcon} alt="email"></img>debra.holt@example.com</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;