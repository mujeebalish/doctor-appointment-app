import { Link } from 'react-router-dom';
import React from 'react';
import Image from './Image.jsx'
import styles from './Component.module.css';

const Navbar = () => {
  return (
    <>
         <nav className={styles.navbar}>
       <div className={styles.logoBox}>
       <p className={styles.brand}>Quick Cure</p>
       <Image src='../../public/Images/logo1.png' alt='Logo'/>
       </div>
      <div className={styles.linkBox}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/dashboard">Dashboard</Link>
      </div>

    </nav>
    </>
    )
}
export default Navbar;
