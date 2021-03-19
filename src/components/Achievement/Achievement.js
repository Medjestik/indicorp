import React from 'react';
import './Achievement.css';
import customerIcon from '../../images/customer-icon-primary.png';
import chainIcon from '../../images/chain-icon-primary.png';
import awardIcon from '../../images/award-icon-primary.png';
import caseIcon from '../../images/briefcase-icon-primary.png';

function Achievement() {
  return (
    <div className="achievement container">
      <h2 className="achievement__title">Why choose us</h2>
      <p className="achievement__subtitle">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      <ul className="achievement__container">
        <li className="achievement__item">
          <img className="achievement__icon" src={customerIcon} alt="customers"></img>
          <span className="achievement__count">3K</span>
          <p className="achievement__description">Cases done</p>
        </li>
        <li className="achievement__item">
          <img className="achievement__icon" src={chainIcon} alt="chain"></img>
          <span className="achievement__count">45</span>
          <p className="achievement__description">Happy customers</p>
        </li>
        <li className="achievement__item">
          <img className="achievement__icon" src={awardIcon} alt="award"></img>
          <span className="achievement__count">12+</span>
          <p className="achievement__description">Award winning</p>
        </li>
        <li className="achievement__item">
          <img className="achievement__icon" src={caseIcon} alt="case"></img>
          <span className="achievement__count">1.5K</span>
          <p className="achievement__description">Cases done</p>
        </li>
      </ul>
    </div>
  );
}

export default Achievement;