import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <div className="navigation-top">
      <ul className="navigation-top__list">
        <li><Link to="/">Главная</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
