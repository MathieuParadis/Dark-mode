import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? 
        Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <form className="form">
        <textarea rows="8"></textarea>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;