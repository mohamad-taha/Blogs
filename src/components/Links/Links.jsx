import { Link, NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <div>
        <h1>
          <Link to={"/"}>Mohamad Taha</Link>
        </h1>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navLinks" : "navLinks"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink className="navLinks" to={"/about"}>
          About
        </NavLink>
      </div>
      <Link className="primaryBtn navLinks" to={"/signIn"}>
        Sign In
      </Link>
    </>
  );
};

export default Links;
