import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';

function Main() {
  return (
    <section className="main main__layout" id="main">
      <div className="container">
        <Header />
        <h1 className="main__title">Empower your business</h1>
        <h2 className="main__subtitle">We know how large objects will act, but things on a small scale.</h2>
        <div className="main__buttons-container">
          <button className="main__btn main__btn_type_primary" type="button">Get Quote Now</button>
          <button className="main__btn main__btn_type_secondary" type="button">Learn More</button>
        </div>
      </div>
      
    </section>
  );
}

export default Main;