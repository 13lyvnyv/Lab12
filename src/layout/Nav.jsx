import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import img1 from '../images/logo.svg';
import img2 from '../images/measering.svg';
import img3 from '../images/calculation.svg';


const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/"><div className={styles.home}><img src={img1} alt ="logo"/></div></Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/request"><div className={styles.request}><img src={img2} alt="request" /> Make request</div></Link></li>
        <li><Link to="/calculation"><div className={styles.calculation}><img src={img3} alt="calculation" /> Calculation</div></Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
