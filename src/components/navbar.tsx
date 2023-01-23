import { NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Product</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
  