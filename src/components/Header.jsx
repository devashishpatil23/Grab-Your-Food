import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className=" p-3 border-b-2 border-gray-300">
      <div className="lg:w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center ">
        <div>
        <NavLink to={"/"}>   <img className="w-32 lg:w-36" src={logo} alt="" /></NavLink>
       
        </div>
        <div>
          <ul
            className="flex
        gap-4"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
