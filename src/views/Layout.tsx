import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export function Layout() {
  return (
    <main>
      <nav>
        <ul className="ul-nav">
          <Link to="/" className="link-nav">
            Book List
          </Link>
          <Link to="/book/add" className="link-nav">
            Add Book
          </Link>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
