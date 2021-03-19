import React from 'react';
import './Feedback.css';

function Feedback() {
  return (
    <section className="feedback container">
      <div className="feedback__info">
        <h3 className="feedback__title">Consulting Agency For Your Business</h3>
        <p className="feedback__subtitle">the quick fox jumps over the lazy dog</p>
      </div>
      <button className="feedback__btn">Contact Us</button>
    </section>
  );
}

export default Feedback;