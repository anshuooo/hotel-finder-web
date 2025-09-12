import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-sm">
      <div className="text-white text-xl font-bold">Hotel Finder</div>
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="text-white hover:text-blue-300 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-300 transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-blue-300 transition">Contact</Link>
        </li>
        <li>
          <Link to= "/Login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;