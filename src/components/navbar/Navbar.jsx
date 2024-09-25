import NavbarSearch from "./NavbarSearch";
import Logo from "./../../../public/favicon.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link className="flex items-center gap-1" to="/">
          <img className="h-10" src={Logo} alt="MiniTube Logo" />
          <h1 className="text-3xl font-bold text-blue mt-3">MiniTube</h1>
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          {/* Navbar Serch */}
          <NavbarSearch />
          <FaSearch className="inline h-4 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
