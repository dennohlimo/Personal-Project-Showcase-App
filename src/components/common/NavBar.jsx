import { Link } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/admin", label: "Admin Portal" },
];

const NavBar = () => {
  return (
    <header className="flex items-center justify-between bg-amber-800 px-6 py-4 text-amber-50">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-sm font-medium hover:text-amber-200"
        >
          {link.label}
        </Link>
      ))}
    </header>
  );
};
export default NavBar;
