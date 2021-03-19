import React from 'react';
import './App.css';
import Main from '../Main/Main.js';
import Goods from '../Goods/Goods.js';
import Achievement from '../Achievement/Achievement.js';
import Advice from '../Advice/Advice.js';
import Advertising from '../Advertising/Advertising.js';
import Clients from '../Clients/Clients.js';
import Support from '../Support/Support.js';
import Feedback from '../Feedback/Feedback.js';
import Contacts from '../Contacts/Contacts.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Main />
        <Goods />
        <Achievement />
        <Advice />
        <Advertising />
        <Clients />
        <Support />
        <Feedback />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
