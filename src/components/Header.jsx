import React from 'react';
import ModeSwitch from './ModeSwitch';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://github.com/MathieuParadis" target="_blank">
          <img class="logo" src={process.env.PUBLIC_URL + '/github.png'} alt="github logo"/>
        </a>
        <h3>Portofolio of Mathieu</h3>
      </div>
      <div className="header-right">
        <ModeSwitch />
      </div>
    </div>
  );
};

export default Header;