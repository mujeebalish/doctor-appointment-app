import { Link, NavLink} from 'react-router-dom';
import React from 'react';
import Image from './Image.jsx'
import styles from './Component.module.css';

const Navbar = () => {
  return (
    <>
         <nav className={styles.navbar}>
       <div className={styles.logoBox}>
       <p className={styles.brand}>Quick <Image src='../../public/images/logo2.png' alt='Logo'/>Cure</p>

       </div>
      <div className={styles.linksBox}>
        <ul>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      </ul>
      </div>

    </nav>
    </>
    )
}
export default Navbar;
