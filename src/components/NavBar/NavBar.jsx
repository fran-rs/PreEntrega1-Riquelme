import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to={"/"}>
        <h3>Taconeras</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/bota`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Botas
        </NavLink>
        <NavLink
          to={`/category/calzado`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Calzado
        </NavLink>
        <NavLink
          to={`/category/plataforma`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Plataforma
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
