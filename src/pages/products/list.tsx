import { NavLink, Outlet } from "react-router-dom";
import './list.css';

export const ProductListPage = () => {
  return (
    <div>
      <h2>Products</h2>
      <p>All products for sale</p>
      <nav className='secondnav'>
        <NavLink to='newproducts'>New Products</NavLink>
        <NavLink to='featuredproducts'>Featured</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
