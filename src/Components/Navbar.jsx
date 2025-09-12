import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    if (token) {
      setIsLoggedIn(true);
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-sm">
      <div className="text-white text-xl font-bold">Hotel Finder</div>
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="text-white hover:text-blue-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-300 transition">
            Contact
          </Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Signup
                </button>
              </Link>
            </li>
          </>
        ) : (
          <li className="relative group">
            <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              {role?.charAt(0).toUpperCase()}
            </button>
            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
