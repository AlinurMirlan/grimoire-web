import { Outlet } from "react-router-dom";
import "../assets/styles/layout.css";
import { IconBook } from "../assets/icons/IconBook";
import { LayoutNavLink } from "../components/LayoutNavLink";
import { IconAdd } from "../assets/icons/IconAdd";

export function Layout() {
  return (
    <main>
      <nav>
        <ul className="layout_nav">
          <LayoutNavLink to="/">
            <IconBook />
            Book List
          </LayoutNavLink>
          <LayoutNavLink to="/book/add">
            <IconAdd />
            Add Book
          </LayoutNavLink>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
