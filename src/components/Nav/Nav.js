import React, { Component } from 'react';

//Components
import Wrapper from './subcomponents/Wrapper';
import './Nav.css';

const Nav = () => {
  return(
    <Wrapper>
      <ul className="nav-container">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Our Work</li>
        <li>Visit</li>
      </ul>
    </Wrapper>
  )
}

export default Nav;
