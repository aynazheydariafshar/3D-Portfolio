import { NavLink } from "react-router-dom";

const navbarItems: string[] = ["about", "projects", "contact"];

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4">
      <NavLink
        className="w-10 h-10 items-center font-bold justify-center flex bg-slate-100 text-blue-500 shadow-lg rounded-lg"
        to="/"
      >
        <p className="">AH</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {navbarItems.map((item: string) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
            to={`/${item}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
