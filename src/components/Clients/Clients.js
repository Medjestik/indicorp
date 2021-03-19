import React from 'react';
import './Clients.css';
import Form from '../Form/Form.js';
import oneClientIcon from '../../images/client-one-icon.png';
import twoClientIcon from '../../images/client-two-icon.png';
import threeClientIcon from '../../images/client-three-icon.png';
import fourClientIcon from '../../images/client-four-icon.png';
import fiveClientIcon from '../../images/client-five-icon.png';
import sixClientIcon from '../../images/client-six-icon.png';

function Clients() {
  return (
    <section className="clients">
      <ul className="container clients__container">
        <li className="clients__item"><img className="clients__icon" src={oneClientIcon} alt="client-one"></img></li>
        <li className="clients__item"><img className="clients__icon" src={twoClientIcon} alt="client-two"></img></li>
        <li className="clients__item"><img className="clients__icon" src={threeClientIcon} alt="client-three"></img></li>
        <li className="clients__item"><img className="clients__icon" src={fourClientIcon} alt="client-four"></img></li>
        <li className="clients__item"><img className="clients__icon" src={fiveClientIcon} alt="client-five"></img></li>
        <li className="clients__item"><img className="clients__icon" src={sixClientIcon} alt="client-six"></img></li>
      </ul>
      <div className="clients__form container">
        <div className="clients__form-container">
          <h3 className="clients__form-title">Subscribe For Latest Newsletter</h3>
          <Form />
        </div>
      </div>
      <div className="clients__footer"></div>
    </section>
  );
}

export default Clients;