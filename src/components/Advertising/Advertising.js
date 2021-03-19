import React from 'react';
import './Advertising.css';
import advertisingBgImg from '../../images/advertising-bg-cover.jpg';
import peopleIcon from '../../images/people-color-primary-icon.png';
import speedIcon from '../../images/speed-color-primary-icon.png';

function Advertising() {
  return (
    <section className="advertising" id="advertising">
      <div className="container advertising__container">
        <h2 className="advertising__title">We are providing best business service.</h2>
        <p className="advertising__subtitle">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="advertising__content">
          <img className="advertising__img" src={advertisingBgImg} alt="advertising"></img>
          <div className="advertising__description">
            <h3 className="advertising__description-title">Most trusted in our field</h3>
            <p className="advertising__description-subtitle">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <ul className="advertising__advantages">
              <li className="advertising__advantage">
                <img className="advertising__advantage-icon" src={peopleIcon} alt="advertising"></img>
                <div className="advertising__advantage-description">
                  <h5 className="advertising__advantage-title">the quick fox jumps over the lazy dog</h5>
                  <p className="advertising__advantage-subtitle">Things on a very small scale ...</p>
                </div>
              </li>
              <li className="advertising__advantage">
                <img className="advertising__advantage-icon" src={speedIcon} alt="advertising"></img>
                <div className="advertising__advantage-description">
                  <h5 className="advertising__advantage-title">the quick fox jumps over the lazy dog</h5>
                  <p className="advertising__advantage-subtitle">Things on a very small scale ...</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advertising;