import { Nav, NavItem, NavLink } from "react-bootstrap";
export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink href="/Labs">Labs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab1">Lab 1</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab2">Lab 2</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab3">Lab 3</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Kambaz</NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-github" href="https://github.com/sissi0509">
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
