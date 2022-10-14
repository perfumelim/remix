import { Link } from "@remix-run/react";
import logo from "~/images/logo.png";
import Lottie from "react-lottie";
import animationData from "~/lotties/sleepy-cat.json";

function Sidebar() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="absolute z-10 min-h-screen w-1/4 border-r border-customGrey-400">
      <div className="navbar pt-6">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} className="w-28" alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current text-customGrey-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative rounded">
          <Lottie options={defaultOptions} />
        </div>
        <button className="btn btn-circle btn-wide bg-customGrey-400 text-whiteish  hover:bg-whiteish hover:text-customGrey-400">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
