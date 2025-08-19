import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <>
         <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
       <div >
       <p className="text-xl font-bold">Logo</p>
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
