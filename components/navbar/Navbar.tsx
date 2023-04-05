import NavbarEl from "./NavbarEl";
import { useState } from "react";
function Navbar() {
  const [activeItem, setActiveItem] = useState(1);
  const setActive = function (event: React.MouseEvent) {
    event.preventDefault();
    setActiveItem(Number.parseInt(event.currentTarget.id));
  };
  return (
    <nav className="bg-slate-400 px-2 fixed w-full h-16 z-20 top-0 left-0 border-b flex justify-center space-x- shadow-lg opacity-90">
      <NavbarEl activeItem={activeItem} id="1" setActive={setActive}>
        Portfolio
      </NavbarEl>
      <NavbarEl activeItem={activeItem} id="2" setActive={setActive}>
        Experience
      </NavbarEl>
    </nav>
  );
}
export default Navbar;
