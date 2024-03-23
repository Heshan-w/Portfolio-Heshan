import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-black border-b-2 font-mono border-neutral-200 sticky top-0 z-50 py-6 px-4 sm:px-0">
      <div className="text-xl text-neutral-200 px-4 sm:px-12">
        <a href="https://github.com/Heshan-w" target="blank">
          Heshan-w
        </a>
      </div>

      <div className="flex flex-col sm:flex-row text-neutral-200 text-xl ">
        {/* Link component is used to create a link to a different route in the application */}
        <Link to="/" className="px-4 sm:px-12 hover:underline">
          About Me
        </Link>
        <Link to="/projects" className="px-4 sm:px-12 hover:underline">
          Projects
        </Link>
        <Link to="" className="px-4 sm:px-12 hover:underline">
          CV
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
