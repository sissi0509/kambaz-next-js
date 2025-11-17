"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function TOC() {
  const pathname = usePathname();
  const links = [
    { href: "/Labs", label: "Labs", id: "wd-labs-link" },
    { href: "/Labs/Lab1", label: "Lab 1", id: "wd-lab1-link" },
    { href: "/Labs/Lab2", label: "Lab 2", id: "wd-lab2-link" },
    { href: "/Labs/Lab3", label: "Lab 3", id: "wd-lab3-link" },
    { href: "/Labs/Lab4", label: "Lab 4", id: "wd-lab3-link" },
    { href: "/Labs/Lab5", label: "Lab 5", id: "wd-lab3-link" },
    { href: "/", label: "Kambaz", id: "wd-kambaz-link" },
    {
      href: "https://github.com/sissi0509/kambaz-next-js",
      label: "My GitHub client",
      id: "wd-github-client",
    },
    {
      href: "https://github.com/sissi0509/kambaz-node-server-app",
      label: "My GitHub server",
      id: "wd-github-server",
    },
    {
      href: "https://kambaz-node-server-app-16dm.onrender.com",
      label: "root of the server",
      id: "wd-root-server",
    },
  ];
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link.href}>
          <NavLink
            href={link.href}
            as={Link}
            id={link.id}
            className={`nav-link ${
              pathname.endsWith(`${link.href}`) ? "active" : ""
            }`}
          >
            {link.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
