import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full max-w-[1220px] mx-auto h-16 px-[20px] flex justify-between items-center">
        <span className="text-3xl">
          <NavLink to="/">EverGreen</NavLink>
        </span>
        <ul className="space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
