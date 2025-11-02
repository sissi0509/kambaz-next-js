"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink
            as={Link}
            href={link}
            active={pathname.endsWith(link.toLowerCase())}
          >
            {link}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
    // <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
    //   <Link
    //     href="Signin"
    //     id="wd-account-signin-link"
    //     className="list-group-item active"
    //   >
    //     Signin
    //   </Link>

    //   <Link
    //     href="Signup"
    //     id="wd-account-signup-link"
    //     className="list-group-item text-danger border-0"
    //   >
    //     Signup
    //   </Link>

    //   <Link
    //     href="Profile"
    //     id="wd-account-profile-link"
    //     className="list-group-item text-danger border-0"
    //   >
    //     Profile
    //   </Link>
    // </div>
  );
}
