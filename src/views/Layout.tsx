import { Link, Outlet } from "react-router-dom";
import "../assets/styles/layout.css";
import { IconBook } from "../assets/icons/IconBook";
import { IconAdd } from "../assets/icons/IconAdd";

export function Layout() {
  return (
    <main>
      <nav>
        <ul className="layout_nav">
          <Link to="/" className="layout_nav_a">
            <IconBook />
            Book List
          </Link>
          <Link to="/book/add" className="layout_nav_a">
            <IconAdd />
            Add Book
          </Link>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
