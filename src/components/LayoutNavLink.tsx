import { ComponentPropsWithoutRef } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/LayoutNavLink.css";

type Props = {
  to: string;
} & ComponentPropsWithoutRef<"a">;

export function LayoutNavLink({ to, children, ...aProps }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive && "layout_nav_link_active"} layout_nav_link`
      }
      {...aProps}
    >
      {children}
    </NavLink>
  );
}
