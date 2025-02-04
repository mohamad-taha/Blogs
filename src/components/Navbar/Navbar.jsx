import { TiThList } from "react-icons/ti";
import Links from "./../Links/Links";
import Sidebar from "./../Sidebar/Sidebar";
import { useState } from "react";
import { toggleSidebar } from "./../../utils/ToggleSidebar/ToggleSidebar";
import "./NavBar.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  window.onresize = () => {
    if (window.innerWidth >= 640) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <nav>
        <Links />
        <button
          aria-label="toggle menu"
          onClick={() => toggleSidebar(setShowSidebar)}
        >
          <TiThList fontSize={20} />
        </button>
      </nav>
      <Sidebar display={showSidebar ? "showSidebar" : ""} />
    </>
  );
};

export default Navbar;
