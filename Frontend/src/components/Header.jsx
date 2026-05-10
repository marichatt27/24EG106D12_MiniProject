import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white px-6 py-4 shadow-lg">

      <div className="flex justify-between items-center">

        {/* Title / Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Employee Manager
        </h1>

        {/* Links */}
        <ul className="flex gap-4 text-sm md:text-base font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-purple-700 px-4 py-1 rounded-full shadow-md transition"
                  : "hover:bg-white/20 px-4 py-1 rounded-full transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/CreateEmp"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-purple-700 px-4 py-1 rounded-full shadow-md transition"
                  : "hover:bg-white/20 px-4 py-1 rounded-full transition"
              }
            >
              Create
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/List"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-purple-700 px-4 py-1 rounded-full shadow-md transition"
                  : "hover:bg-white/20 px-4 py-1 rounded-full transition"
              }
            >
              Employees
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;