import React from 'react';
import './Form.css';

function Form() {

  const [email, setEmail] = React.useState('');

  function onSubmit(event) {
    event.preventDefault();
    console.log(email);
  }

  function handleInputChange(event) {
    setEmail(event.target.value);
  }

  return (
    <form className="form" name="subscribe" action="#" noValidate onSubmit={onSubmit}>
      <input 
      className="form__input"
      placeholder="Your Email"
      type="email"
      id="subscribe"
      name="subscribe"
      minLength="2"
      required
      onChange={handleInputChange}
      />
      <button className="form__btn" type="submit">Subscribe</button>
    </form>
  );
}

export default Form;