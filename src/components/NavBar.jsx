import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";

const NavBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-black border-b-2 font-mono border-neutral-200 sticky top-0 z-50 py-6 px-4 sm:px-0">
      <div className="text-xl text-neutral-200 px-4 sm:px-12">
        <Tooltip
          content="GitHub"
          placement="bottom"
          showArrow={true}
          className="bg-neutral-200"
        >
          <a href="https://github.com/Heshan-w" target="_blank">
            Heshan-w
          </a>
        </Tooltip>
      </div>

      <div className="flex flex-col sm:flex-row text-neutral-200 text-xl space-y-2 sm:space-y-0">
        {/* Link component is used to create a link to a different route in the application */}
        <Link to="/" className="px-4 sm:px-12 hover:underline">
          Home
        </Link>
        <Link to="/projects" className="px-4 sm:px-12 hover:underline">
          Projects
        </Link>
        <a
          href="/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-12 hover:underline"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default NavBar;