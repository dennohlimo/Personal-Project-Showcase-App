import { Link } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/admin", label: "Admin Portal" },
];

const NavBar = () => {
  return (
    <div>
      <header>
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </header>
    </div>
  );
};
export default NavBar;
