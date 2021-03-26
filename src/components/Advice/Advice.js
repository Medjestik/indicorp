import React from 'react';
import './Advice.css';
import firstAdviceImg from '../../images/advice_first.jpg';
import secondAdviceImg from '../../images/advice_second.jpg';
import thirdAdviceImg from '../../images/advice_third.jpg';
import fourthAdviceImg from '../../images/advice_fourth.jpg';

function Advice() {
  return (
    <section className="advice container" id="advice">
      <h2 className="advice__title">Practice Advice</h2>
      <p className="advice__subtitle">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      <ul className="advice__container">
        <li className="advice__item" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <h3 className="advice__item-title">A single source of truth</h3>
          <p className="advice__item-subtitle">Newton thought that light was made up of particles, but then it was discovered</p>
          <img className="advice__img" src={firstAdviceImg} alt="advice-first"></img>
        </li>
        <li className="advice__item" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
          <h3 className="advice__item-title">Fastest way to organize</h3>
          <p className="advice__item-subtitle">“Quantum mechanics” is the description of the behaviour of matter</p>
          <img className="advice__img" src={secondAdviceImg} alt="advice-second"></img>
        </li>
        <li className="advice__item" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
          <h3 className="advice__item-title">Fastest way to take action</h3>
          <p className="advice__item-subtitle">They describe a universe consisting of bodies moving</p>
          <img className="advice__img" src={thirdAdviceImg} alt="advice-third"></img>
        </li>
        <li className="advice__item" data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
          <h3 className="advice__item-title">Work better together</h3>
          <p className="advice__item-subtitle">They finally obtained a consistent description of the behaviour</p>
          <img className="advice__img" src={fourthAdviceImg} alt="advice-fourth"></img>
        </li>
      </ul>
    </section>
  );
}

export default Advice;