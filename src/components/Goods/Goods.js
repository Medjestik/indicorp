import React from 'react';
import './Goods.css';

function Goods() {
  return (
    <section className="goods container">
      <ul className="goods__container">
        <li className="goods__item">
          <div className="goods__icon goods__icon_type_case"></div>
          <h3 className="goods__title">Digital Marketing</h3>
          <p className="goods__subtitle">We focus on ergonomics and meeting you where you work.</p>
        </li>
        <li className="goods__item">
          <div className="goods__icon goods__icon_type_market"></div>
          <h3 className="goods__title">National top 50 firms</h3>
          <p className="goods__subtitle">Just type what's on your mind and we'll get you there.</p>
        </li>
        <li className="goods__item goods__item_type_active">
          <div className="goods__icon goods__icon_type_monitor"></div>
          <h3 className="goods__title goods__title_type_active">Digital Marketing</h3>
          <p className="goods__subtitle goods__subtitle_type_active">the quick fox jumps over the lazy dog</p>
        </li>
      </ul>
    </section>
  );
}

export default Goods;