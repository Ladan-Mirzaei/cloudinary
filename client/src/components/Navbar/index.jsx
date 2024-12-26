import "./navBar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Rezept</div>
      <nav className="normal-menu">
        <ul className="navbar-links">
          <>
            <li>
              <NavLink to="/recipeAll">Rezepte</NavLink>
            </li>

            <li>
              <NavLink to="/recipeform">Neue Rezepte</NavLink>
            </li>
          </>
        </ul>
      </nav>
    </header>
  );
}
