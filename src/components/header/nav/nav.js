import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/?">LinkedIn</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
