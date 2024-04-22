import { NavLink } from "react-router-dom";

function Navigation({ className }) {
  const isActive = ({ isActive }) =>
    isActive ? "text-primary " : "text-textPrimary";
  return (
    <nav className={className}>
      <ul className="flex gap-7">
        <li>
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={isActive}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
