import logo from "../assets/logo.png";
function Header() {
  return (
    <nav className="w-full p-3 border-b-2 border-gray-300">
      <div className=" container mx-auto flex flex-col sm:flex-row justify-between items-center ">
        <div>
          <img className="w-32 lg:w-36" src={logo} alt="" />
        </div>
        <div>
          <ul
            className="flex
        gap-4"
          >
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
