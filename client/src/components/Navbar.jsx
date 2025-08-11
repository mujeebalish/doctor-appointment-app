import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <>
         <nav>
       <div>
       <p>Logo</p>
       <img alt="Logo" />
       </div>
      <div>
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
