import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-full w-64 bg-gray-900 text-white flex flex-col">
      <div className="flex items-center justify-center bg-blue-500 p-4">
        <h1 className="text-lg font-bold">Homework 3</h1>
      </div>
      <ul className="space-y-2 text-lg mt-8">
        <li className="hover:bg-gray-800 hover:text-white p-2 rounded">
          <Link to="/" className="flex items-center p-2">
            <span className="ml-4">Home</span>
          </Link>
        </li>
        <li className="hover:bg-gray-800 hover:text-white p-2 rounded">
          <Link to="/list" className="flex items-center p-2">
            <span className="ml-4">List</span>
          </Link>
        </li>
        <li className="hover:bg-gray-800 hover:text-white p-2 rounded">
          <Link to="/population" className="flex items-center p-2">
            <span className="ml-4">Population</span>
          </Link>
        </li>
        <li className="hover:bg-gray-800 hover:text-white p-2 rounded">
          <Link to="/CustomRoute" className="flex items-center p-2">
            <span className="ml-4">Custom-Route</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
