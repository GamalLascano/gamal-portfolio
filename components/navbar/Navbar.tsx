import NavbarEl from "./NavbarEl";
import { useState } from "react";
import NavbarRefs from "@/types/NavbarRefs";
function Navbar(data: NavbarRefs) {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <nav className="bg-slate-400 px-2 fixed w-full h-16 z-20 top-0 left-0 border-b flex justify-center space-x- shadow-lg opacity-90">
      <NavbarEl
        activeItem={activeItem}
        id="1"
        setActiveItem={setActiveItem}
        refJump={data.inicio}
      >
        Inicio
      </NavbarEl>
      <NavbarEl
        activeItem={activeItem}
        id="2"
        setActiveItem={setActiveItem}
        refJump={data.port}
      >
        Portfolio
      </NavbarEl>
      <NavbarEl
        activeItem={activeItem}
        id="3"
        setActiveItem={setActiveItem}
        refJump={data.exp}
      >
        Experience
      </NavbarEl>
    </nav>
  );
}
export default Navbar;
